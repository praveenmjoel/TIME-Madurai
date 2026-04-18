/**
 * TIME Madurai – AIMCAT Data Extractor Bookmarklet (v4)
 *
 * How to install:
 *   1. Copy the one-liner at the very bottom of this file
 *   2. Create a new bookmark → paste as URL → name "Extract AIMCAT"
 *
 * How to use (3 runs):
 *   Run 1 — On the Scorecard tab         → click bookmark
 *   Run 2 — Navigate to Sub Area tab,
 *            expand VA/RC + DI/LR + QA   → click bookmark
 *   Run 3 — Navigate to Time Spent tab   → click bookmark
 *            → JSON downloads automatically
 *
 * Each run detects the current tab from page content and URL,
 * saves progress to localStorage, and prompts you for the next step.
 * Re-running on a completed tab just overwrites that section.
 */

(async function () {
  'use strict';

  const STORE_KEY = 'aimcat_extract_v4';
  const wait = ms => new Promise(r => setTimeout(r, ms));

  // ── Helpers ────────────────────────────────────────────────────────────────
  function getHeader() {
    const tx = document.body.innerText;
    const iM = tx.match(/ID\s*Card\s*No\s*[:\|]\s*([A-Z0-9]+)/i);
    const nM = tx.match(/Name\s*[:\|]\s*([^|\n\r]+)/i);
    const tM = tx.match(/Test\s*[:\|]\s*(AIMCAT\s*\d+)/i);
    const aA = tx.match(/AIMCAT\s*(\d{4})/i);
    return {
      aimcatId:    tM ? tM[1].replace(/\s+/, '') : (aA ? 'AIMCAT' + aA[1] : 'UNKNOWN'),
      studentId:   iM ? iM[1].trim()             : 'UNKNOWN',
      studentName: nM ? nM[1].trim().replace(/\|.*/, '').replace(/Test.*/i, '').trim() : 'UNKNOWN',
    };
  }

  function currentTabName() {
    const tab = new URL(location.href).searchParams.get('tab') || '';
    const tx  = document.body.innerText;
    if (tab.includes('score') || tx.includes('NetScore'))               return 'scorecard';
    if (tab.includes('sub')   || tx.includes('Judicious'))              return 'subarea';
    if (tab.includes('time')  || tx.includes('Time Spent (in Secs)'))   return 'time';
    if (tab.includes('snap')  || tab.includes('perform'))               return 'other';
    return 'unknown';
  }

  // ── Scorecard extraction ───────────────────────────────────────────────────
  function extractScorecard() {
    const tbl = [...document.querySelectorAll('table')].find(t =>
      (t.innerText.includes('Right') || t.innerText.includes('NetScore')) && t.innerText.includes('Accuracy')
    );
    if (!tbl) return null;
    const keys = ['varc', 'dilr', 'qa', 'total'];
    const out  = Object.fromEntries(keys.map(k => [k, {}]));
    for (const row of tbl.querySelectorAll('tr')) {
      const cells = [...row.querySelectorAll('td,th')];
      if (cells.length < 2) continue;
      const lbl  = cells[0].innerText.trim().toLowerCase();
      const vals = cells.slice(1, 5).map(c => c.innerText.trim());
      const sf   = (f, fn) => keys.forEach((k, i) => { out[k][f] = fn(vals[i] ?? ''); });
      const num  = v => parseFloat(v) || 0;
      const int  = v => parseInt(v) || null;
      const dash = v => (!v || v === '-' || v === '--') ? null : parseFloat(v);
      if (lbl.includes('right') && lbl.includes('wrong'))
        keys.forEach((k, i) => { const m = (vals[i]||'').match(/(\d+)\s*[&\s]\s*(\d+)/); if(m){out[k].right=+m[1];out[k].wrong=+m[2];} });
      else if (lbl.includes('accuracy'))                               sf('accuracy', num);
      else if (lbl.includes('netscore')||lbl.includes('net score'))   sf('netScore', num);
      else if (lbl.includes('cutoff'))                                 sf('cutoff', dash);
      else if (lbl.includes('highest'))                                sf('highestScore', num);
      else if (lbl.includes('all india rank'))                         sf('allIndiaRank', int);
      else if (lbl.includes('city rank'))                              sf('cityRank', int);
      else if (lbl.includes('percentile') && !lbl.includes('percentage')) sf('percentile', num);
      else if (lbl.includes('percentage'))                             sf('percentageScore', num);
    }
    return out;
  }

  // ── Sub Area extraction ────────────────────────────────────────────────────
  // Assumes user has already navigated to Sub Area tab and expanded all sections.
  // Will also attempt to auto-expand any collapsed accordions.

  function isGreen(el) {
    const bg = getComputedStyle(el).backgroundColor;
    const m  = bg.match(/\d+/g);
    if (!m || m.length < 3) return false;
    return +m[1] > 120 && +m[0] < 150 && +m[2] < 150;
  }

  function parseQBtns(cell) {
    // Question buttons: text like "10/E" inside button/span/div
    const btns = [...cell.querySelectorAll('*')].filter(e => {
      const t = e.textContent.trim();
      return /^\d+\/[EMDV]+$/.test(t) && e.children.length === 0;
    });
    if (btns.length) {
      return btns.map(b => {
        const [q, d] = b.textContent.trim().split('/');
        return { qNo: +q, difficulty: d, goodDecision: isGreen(b) };
      });
    }
    // Fallback: parse text tokens
    return ((cell.innerText || '').match(/\d+\/[EMDV]+/g) || []).map(t => {
      const [q, d] = t.split('/');
      return { qNo: +q, difficulty: d, goodDecision: null };
    });
  }

  async function extractSubarea() {
    // Try to expand collapsed accordion sections (VA/RC, DI/LR, QA)
    const sectionNames = ['VA/RC', 'DI/LR', 'QA'];
    for (const name of sectionNames) {
      const el = [...document.querySelectorAll('*')].find(e =>
        e.textContent.trim() === name && e.children.length <= 2
      );
      if (el) { el.click(); await wait(700); }
    }
    await wait(600);

    const out = {};

    // Find tables that contain "Judicious" (subarea tables only)
    const subTbls = [...document.querySelectorAll('table')].filter(t =>
      t.innerText.includes('Judicious')
    );

    if (subTbls.length === 0) {
      console.warn('[AIMCAT] No Judicious tables found — are the sections expanded?');
      return null;
    }

    // Associate each table with its section by scanning nearby text
    subTbls.forEach((tbl, fallbackIdx) => {
      // Walk up DOM looking for a heading element containing VA/RC / DI/LR / QA
      let sectionKey = null;
      let el = tbl;
      for (let i = 0; i < 10 && !sectionKey; i++) {
        el = el.parentElement;
        if (!el) break;
        for (const name of sectionNames) {
          if ([...el.childNodes].some(n => n.textContent && n.textContent.trim() === name)) {
            sectionKey = { 'VA/RC': 'varc', 'DI/LR': 'dilr', 'QA': 'qa' }[name];
            break;
          }
        }
      }
      if (!sectionKey) sectionKey = ['varc', 'dilr', 'qa'][fallbackIdx] || `s${fallbackIdx}`;

      out[sectionKey] = [];

      for (const row of tbl.querySelectorAll('tr')) {
        const cells = [...row.querySelectorAll('td,th')];
        if (cells.length < 4) continue;
        const subareaName = cells[0].innerText.trim();
        if (!subareaName || /^(subarea|no\.|question|judicious|accuracy|remarks)/i.test(subareaName)) continue;

        const numQ     = parseInt(cells[1]?.innerText.trim()) || 0;
        const attempted = parseQBtns(cells[2]);
        const leftOut   = parseQBtns(cells[3]);
        const jSel      = cells[4] ? (cells[4].innerText.trim() === '-' ? null : parseFloat(cells[4].innerText)) : null;
        const jLeave    = cells[5] ? (cells[5].innerText.trim() === '-' ? null : parseFloat(cells[5].innerText)) : null;
        const accuracy  = cells[7] ? (cells[7].innerText.trim() === '-' ? null : parseFloat(cells[7].innerText)) : null;

        out[sectionKey].push({ subarea: subareaName, numQ, attempted, leftOut,
          judiciousSelection: jSel, judiciousLeavingOut: jLeave, accuracy });
      }
    });

    return Object.keys(out).length > 0 ? out : null;
  }

  // ── Time Analysis extraction ───────────────────────────────────────────────
  function extractTimeAnalysis() {
    // The time analysis table has columns: Q No | Correct Ans | Section | My Ans |
    //   Test Area | Attempt% | Correct% | Difficulty | Marks | Neg Marks |
    //   Time Spent | Avg All | Avg Correct
    const qTbl = [...document.querySelectorAll('table')].find(t =>
      t.innerText.includes('Question No') &&
      t.innerText.includes('Time Spent') &&
      t.innerText.includes('VA/RC')
    );
    if (!qTbl) return null;

    const SECTION_KEY = { 'VA/RC': 'varc', 'DI/LR': 'dilr', 'QA': 'qa' };
    const sections  = {};
    const questions = [];

    const rows = [...qTbl.querySelectorAll('tr')];
    for (let i = 1; i < rows.length; i++) {
      const r = [...rows[i].querySelectorAll('td,th')];
      if (r.length < 11) continue;
      const qNo = parseInt(r[0].innerText.trim());
      if (isNaN(qNo)) continue;

      const correctAns = r[1].innerText.trim();
      const sectionRaw = r[2].innerText.trim();
      const myAns      = r[3].innerText.trim();
      const testArea   = r[4].innerText.trim();
      const difficulty = r[7].innerText.trim();
      const timeSecs   = parseInt(r[10].innerText.trim()) || 0;
      const avgAll     = parseInt(r[11]?.innerText.trim()) || 0;
      const attemptPct = parseFloat(r[5].innerText.trim()) || 0;
      const correctPct = parseFloat(r[6].innerText.trim()) || 0;

      const sk  = SECTION_KEY[sectionRaw] || sectionRaw.toLowerCase();
      const skp = myAns === 'NA' || myAns === '';
      const ok  = !skp && myAns === correctAns;
      const em  = difficulty === 'E' || difficulty === 'M';

      if (!sections[sk]) sections[sk] = {
        attempted: 0, skipped: 0, correct: 0, wrong: 0,
        totalTimeSecs: 0, avgTimePerAttempted: 0, overTimeCount: 0,
        easySkipped: 0, mediumSkipped: 0, easyWrong: 0, mediumWrong: 0,
      };
      const s = sections[sk];
      if (skp) {
        s.skipped++;
        if (difficulty === 'E') s.easySkipped++;
        if (difficulty === 'M') s.mediumSkipped++;
      } else {
        s.attempted++;
        s.totalTimeSecs += timeSecs;
        if (ok) s.correct++;
        else {
          s.wrong++;
          if (difficulty === 'E') s.easyWrong++;
          if (difficulty === 'M') s.mediumWrong++;
        }
        if (avgAll > 0 && timeSecs > avgAll * 2.5) s.overTimeCount++;
      }

      questions.push({ qNo, section: sk, testArea, myAns, correctAns,
        isCorrect: ok, isWrong: !skp && !ok, skipped: skp,
        difficulty, timeSecs, avgAll, attemptPct, correctPct });
    }

    for (const s of Object.values(sections))
      s.avgTimePerAttempted = s.attempted > 0 ? Math.round(s.totalTimeSecs / s.attempted) : 0;

    return { sections, questions };
  }

  // ── Main ──────────────────────────────────────────────────────────────────
  const hdr  = getHeader();
  const tab  = currentTabName();

  // Load saved state (reset if different student/test)
  let state = {};
  try { state = JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); } catch(e) {}
  if (state.aimcatId !== hdr.aimcatId || state.studentId !== hdr.studentId) {
    state = { ...hdr, extractedAt: new Date().toISOString(), done: {} };
  }

  // Extract current tab
  let msg = '';
  if (tab === 'scorecard') {
    state.scorecard = extractScorecard();
    state.done.scorecard = !!state.scorecard;
    msg = state.scorecard
      ? `✅ Scorecard extracted.\n\nNext: navigate to the Sub Area wise Performance tab, expand VA/RC, DI/LR, and QA sections, then click this bookmark again.`
      : `❌ Scorecard table not found. Make sure you are on the Scorecard tab.`;
  }
  else if (tab === 'subarea') {
    state.subarea = await extractSubarea();
    state.done.subarea = !!state.subarea && Object.keys(state.subarea).length > 0;
    const counts = state.subarea
      ? Object.entries(state.subarea).map(([k, v]) => `${k.toUpperCase()}: ${v.length} subareas`).join(', ')
      : 'nothing found';
    msg = state.done.subarea
      ? `✅ Sub Area extracted: ${counts}\n\nNext: navigate to the Time Spent Analysis tab, then click this bookmark again.`
      : `❌ Sub Area not extracted (${counts}).\n\nMake sure all 3 sections (VA/RC, DI/LR, QA) are expanded, then try again.`;
  }
  else if (tab === 'time') {
    const ta = extractTimeAnalysis();
    state.timeAnalysis = ta ? ta.sections  : null;
    state.questions    = ta ? ta.questions : [];
    state.done.time = !!ta;
    msg = ta
      ? `✅ Time Analysis extracted: ${ta.questions.length} questions.\n\nAll 3 tabs done — downloading JSON now!`
      : `❌ Time analysis table not found. Make sure you are on the Time Spent Analysis tab.`;
  }
  else {
    msg = `⚠ Unrecognised tab (detected: "${tab}").\n\nPlease run this on the Scorecard, Sub Area, or Time Spent Analysis tab.`;
  }

  localStorage.setItem(STORE_KEY, JSON.stringify(state));

  // Check if all 3 are done → download
  const allDone = state.done.scorecard && state.done.subarea && state.done.time;

  if (allDone) {
    const json = JSON.stringify(state, null, 2);
    const fn   = `aimcat_${hdr.studentId}_${hdr.aimcatId}.json`;
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(new Blob([json], { type: 'application/json' })),
      download: fn,
    });
    document.body.appendChild(a); a.click(); a.remove();
    localStorage.removeItem(STORE_KEY);
  }

  // ── Status overlay ─────────────────────────────────────────────────────────
  const steps = [
    { label: '1. Scorecard',   done: state.done.scorecard },
    { label: '2. Sub Area',    done: state.done.subarea   },
    { label: '3. Time Spent',  done: state.done.time      },
  ];
  const stepsHtml = steps.map(s =>
    `<div style="padding:6px 10px;margin:4px 0;border-radius:5px;background:${s.done?'#e6f9ee':'#fff3cd'};color:${s.done?'#1a7a3c':'#856404'};font-size:13px">${s.done?'✅':'⏳'} ${s.label}</div>`
  ).join('');

  const ov = document.createElement('div');
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.82);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif';
  ov.innerHTML = `<div style="background:#fff;padding:24px;border-radius:10px;max-width:520px;width:94%">
    <h3 style="margin:0 0 12px;color:#1a3a6e">AIMCAT Extractor — ${hdr.studentName} / ${hdr.aimcatId}</h3>
    ${stepsHtml}
    <p style="margin:14px 0 0;font-size:13px;line-height:1.6;white-space:pre-wrap">${msg}</p>
    ${allDone ? `<p style="color:#1a7a3c;font-weight:bold;font-size:13px">📥 File downloaded: aimcat_${hdr.studentId}_${hdr.aimcatId}.json</p>` : ''}
    <button onclick="this.closest('div').parentNode.remove()" style="margin-top:16px;padding:7px 20px;border:1px solid #ccc;border-radius:5px;cursor:pointer;font-size:13px">OK</button>
  </div>`;
  document.body.appendChild(ov);

})();


// ═══════════════════════════════════════════════════════════════════════════
// BOOKMARKLET ONE-LINER — copy the line below as the bookmark URL:
// ═══════════════════════════════════════════════════════════════════════════
//
// javascript:(async function(){'use strict';const STORE_KEY='aimcat_extract_v4';const wait=ms=>new Promise(r=>setTimeout(r,ms));function getHeader(){const tx=document.body.innerText;const iM=tx.match(/ID\s*Card\s*No\s*[:\|]\s*([A-Z0-9]+)/i);const nM=tx.match(/Name\s*[:\|]\s*([^|\n\r]+)/i);const tM=tx.match(/Test\s*[:\|]\s*(AIMCAT\s*\d+)/i);const aA=tx.match(/AIMCAT\s*(\d{4})/i);return{aimcatId:tM?tM[1].replace(/\s+/,''):(aA?'AIMCAT'+aA[1]:'UNKNOWN'),studentId:iM?iM[1].trim():'UNKNOWN',studentName:nM?nM[1].trim().replace(/\|.*/,'').replace(/Test.*/i,'').trim():'UNKNOWN'};}function currentTab(){const tab=new URL(location.href).searchParams.get('tab')||'';const tx=document.body.innerText;if(tab.includes('score')||tx.includes('NetScore'))return'scorecard';if(tab.includes('sub')||tx.includes('Judicious'))return'subarea';if(tab.includes('time')||tx.includes('Time Spent (in Secs)'))return'time';return'unknown';}function extractScorecard(){const tbl=[...document.querySelectorAll('table')].find(t=>(t.innerText.includes('Right')||t.innerText.includes('NetScore'))&&t.innerText.includes('Accuracy'));if(!tbl)return null;const keys=['varc','dilr','qa','total'];const out=Object.fromEntries(keys.map(k=>[k,{}]));for(const row of tbl.querySelectorAll('tr')){const cells=[...row.querySelectorAll('td,th')];if(cells.length<2)continue;const lbl=cells[0].innerText.trim().toLowerCase();const vals=cells.slice(1,5).map(c=>c.innerText.trim());const sf=(f,fn)=>keys.forEach((k,i)=>{out[k][f]=fn(vals[i]??'');});const num=v=>parseFloat(v)||0;const int=v=>parseInt(v)||null;const dash=v=>(!v||v==='-'||v==='--')?null:parseFloat(v);if(lbl.includes('right')&&lbl.includes('wrong'))keys.forEach((k,i)=>{const m=(vals[i]||'').match(/(\d+)\s*[&\s]\s*(\d+)/);if(m){out[k].right=+m[1];out[k].wrong=+m[2];}});else if(lbl.includes('accuracy'))sf('accuracy',num);else if(lbl.includes('netscore')||lbl.includes('net score'))sf('netScore',num);else if(lbl.includes('cutoff'))sf('cutoff',dash);else if(lbl.includes('highest'))sf('highestScore',num);else if(lbl.includes('all india rank'))sf('allIndiaRank',int);else if(lbl.includes('city rank'))sf('cityRank',int);else if(lbl.includes('percentile')&&!lbl.includes('percentage'))sf('percentile',num);else if(lbl.includes('percentage'))sf('percentageScore',num);}return out;}function isGreen(el){const bg=getComputedStyle(el).backgroundColor;const m=bg.match(/\d+/g);if(!m||m.length<3)return false;return+m[1]>120&&+m[0]<150&&+m[2]<150;}function parseQBtns(cell){const btns=[...cell.querySelectorAll('*')].filter(e=>{const t=e.textContent.trim();return /^\d+\/[EMDV]+$/.test(t)&&e.children.length===0;});if(btns.length)return btns.map(b=>{const[q,d]=b.textContent.trim().split('/');return{qNo:+q,difficulty:d,goodDecision:isGreen(b)};});return((cell.innerText||'').match(/\d+\/[EMDV]+/g)||[]).map(t=>{const[q,d]=t.split('/');return{qNo:+q,difficulty:d,goodDecision:null};});}async function extractSubarea(){const sN=['VA/RC','DI/LR','QA'];const sK={'VA/RC':'varc','DI/LR':'dilr','QA':'qa'};for(const name of sN){const el=[...document.querySelectorAll('*')].find(e=>e.textContent.trim()===name&&e.children.length<=2);if(el){el.click();await wait(700);}}await wait(600);const out={};const subT=[...document.querySelectorAll('table')].filter(t=>t.innerText.includes('Judicious'));if(!subT.length)return null;subT.forEach((tbl,fi)=>{let sk=null;let el=tbl;for(let i=0;i<10&&!sk;i++){el=el.parentElement;if(!el)break;for(const name of sN){if([...el.childNodes].some(n=>n.textContent&&n.textContent.trim()===name)){sk=sK[name];break;}}}if(!sk)sk=['varc','dilr','qa'][fi]||`s${fi}`;out[sk]=[];for(const row of tbl.querySelectorAll('tr')){const cells=[...row.querySelectorAll('td,th')];if(cells.length<4)continue;const sn=cells[0].innerText.trim();if(!sn||/^(subarea|no\.|question|judicious|accuracy|remarks)/i.test(sn))continue;const numQ=parseInt(cells[1]?.innerText.trim())||0;const atm=parseQBtns(cells[2]);const lo=parseQBtns(cells[3]);const js=cells[4]?(cells[4].innerText.trim()==='-'?null:parseFloat(cells[4].innerText)):null;const jl=cells[5]?(cells[5].innerText.trim()==='-'?null:parseFloat(cells[5].innerText)):null;const acc=cells[7]?(cells[7].innerText.trim()==='-'?null:parseFloat(cells[7].innerText)):null;out[sk].push({subarea:sn,numQ,attempted:atm,leftOut:lo,judiciousSelection:js,judiciousLeavingOut:jl,accuracy:acc});}});return Object.keys(out).length>0?out:null;}function extractTimeAnalysis(){const qT=[...document.querySelectorAll('table')].find(t=>t.innerText.includes('Question No')&&t.innerText.includes('Time Spent')&&t.innerText.includes('VA/RC'));if(!qT)return null;const SK={'VA/RC':'varc','DI/LR':'dilr','QA':'qa'};const sections={};const questions=[];const rows=[...qT.querySelectorAll('tr')];for(let i=1;i<rows.length;i++){const r=[...rows[i].querySelectorAll('td,th')];if(r.length<11)continue;const qNo=parseInt(r[0].innerText.trim());if(isNaN(qNo))continue;const cA=r[1].innerText.trim();const sR=r[2].innerText.trim();const mA=r[3].innerText.trim();const tA=r[4].innerText.trim();const diff=r[7].innerText.trim();const ts=parseInt(r[10].innerText.trim())||0;const av=parseInt(r[11]?.innerText.trim())||0;const ap=parseFloat(r[5].innerText.trim())||0;const cp=parseFloat(r[6].innerText.trim())||0;const sk=SK[sR]||sR.toLowerCase();const skp=mA==='NA'||mA==='';const ok=!skp&&mA===cA;if(!sections[sk])sections[sk]={attempted:0,skipped:0,correct:0,wrong:0,totalTimeSecs:0,avgTimePerAttempted:0,overTimeCount:0,easySkipped:0,mediumSkipped:0,easyWrong:0,mediumWrong:0};const s=sections[sk];if(skp){s.skipped++;if(diff==='E')s.easySkipped++;if(diff==='M')s.mediumSkipped++;}else{s.attempted++;s.totalTimeSecs+=ts;if(ok)s.correct++;else{s.wrong++;if(diff==='E')s.easyWrong++;if(diff==='M')s.mediumWrong++;}if(av>0&&ts>av*2.5)s.overTimeCount++;}questions.push({qNo,section:sk,testArea:tA,myAns:mA,correctAns:cA,isCorrect:ok,isWrong:!skp&&!ok,skipped:skp,difficulty:diff,timeSecs:ts,avgAll:av,attemptPct:ap,correctPct:cp});}for(const s of Object.values(sections))s.avgTimePerAttempted=s.attempted>0?Math.round(s.totalTimeSecs/s.attempted):0;return{sections,questions};}const hdr=getHeader();const tab=currentTab();let state={};try{state=JSON.parse(localStorage.getItem(STORE_KEY)||'{}');}catch(e){}if(state.aimcatId!==hdr.aimcatId||state.studentId!==hdr.studentId)state={...hdr,extractedAt:new Date().toISOString(),done:{}};let msg='';if(tab==='scorecard'){state.scorecard=extractScorecard();state.done.scorecard=!!state.scorecard;msg=state.scorecard?'✅ Scorecard extracted.\n\nNext: go to Sub Area wise Performance tab, expand VA/RC+DI/LR+QA, click bookmark again.':'❌ Scorecard table not found.';}else if(tab==='subarea'){state.subarea=await extractSubarea();state.done.subarea=!!state.subarea&&Object.keys(state.subarea).length>0;const counts=state.subarea?Object.entries(state.subarea).map(([k,v])=>`${k}:${v.length}`).join(', '):'nothing';msg=state.done.subarea?`✅ Sub Area extracted: ${counts}\n\nNext: go to Time Spent Analysis tab, click bookmark again.`:`❌ Sub Area not extracted (${counts}).\nExpand all 3 sections and try again.`;}else if(tab==='time'){const ta=extractTimeAnalysis();state.timeAnalysis=ta?ta.sections:null;state.questions=ta?ta.questions:[];state.done.time=!!ta;msg=ta?`✅ Time Analysis: ${ta.questions.length} questions. Downloading JSON now!`:'❌ Time analysis table not found.';}else{msg=`⚠ Unrecognised tab ("${tab}"). Run on Scorecard, Sub Area, or Time Spent tab.`;}localStorage.setItem(STORE_KEY,JSON.stringify(state));const allDone=state.done.scorecard&&state.done.subarea&&state.done.time;if(allDone){const json=JSON.stringify(state,null,2);const fn=`aimcat_${hdr.studentId}_${hdr.aimcatId}.json`;const a=Object.assign(document.createElement('a'),{href:URL.createObjectURL(new Blob([json],{type:'application/json'})),download:fn});document.body.appendChild(a);a.click();a.remove();localStorage.removeItem(STORE_KEY);}const steps=[{label:'1. Scorecard',done:state.done.scorecard},{label:'2. Sub Area',done:state.done.subarea},{label:'3. Time Spent',done:state.done.time}];const sh=steps.map(s=>`<div style="padding:6px 10px;margin:4px 0;border-radius:5px;background:${s.done?'#e6f9ee':'#fff3cd'};color:${s.done?'#1a7a3c':'#856404'};font-size:13px">${s.done?'✅':'⏳'} ${s.label}</div>`).join('');const ov=document.createElement('div');ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.82);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif';ov.innerHTML=`<div style="background:#fff;padding:24px;border-radius:10px;max-width:520px;width:94%"><h3 style="margin:0 0 12px;color:#1a3a6e">AIMCAT — ${hdr.studentName} / ${hdr.aimcatId}</h3>${sh}<p style="margin:14px 0 0;font-size:13px;line-height:1.6;white-space:pre-wrap">${msg}</p>${allDone?`<p style="color:#1a7a3c;font-weight:bold;font-size:13px">📥 Downloaded: aimcat_${hdr.studentId}_${hdr.aimcatId}.json</p>`:''}<button onclick="this.closest('div').parentNode.remove()" style="margin-top:16px;padding:7px 20px;border:1px solid #ccc;border-radius:5px;cursor:pointer;font-size:13px">OK</button></div>`;document.body.appendChild(ov);})();
