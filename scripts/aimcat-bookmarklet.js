/**
 * TIME Madurai – AIMCAT Data Extractor Bookmarklet (v3)
 *
 * How to install:
 *   1. Copy the one-liner at the very bottom of this file
 *   2. Create a new bookmark in Chrome → paste it as the URL → name it "Extract AIMCAT"
 *
 * How to use:
 *   1. Log into time4education.com, open an AIMCAT results page (Scorecard tab)
 *   2. Click the "Extract AIMCAT" bookmark
 *   3. It auto-navigates: Scorecard → Sub Area wise Performance → Time Spent Analysis
 *   4. Downloads a JSON file with all extracted data
 *
 * Page structure (confirmed):
 *   - No iframes — all data in main document
 *   - Tabs: React SPA (div/span elements, not buttons)
 *   - Sub Area tab: accordion with collapsed VA/RC, DI/LR, QA sections
 *   - Question buttons: text = "Q_NO/DIFFICULTY" e.g. "10/E", colored green/red
 */

(async function () {
  'use strict';

  const wait = ms => new Promise(r => setTimeout(r, ms));

  // ── 1. Verify page ────────────────────────────────────────────────────────
  if (!location.href.includes('aimcat') && !document.body.innerText.toLowerCase().includes('aimcat')) {
    alert('❌ Please open an AIMCAT results page first.');
    return;
  }

  // ── 2. Click tab by text — searches ALL elements, prefers shallowest match ─
  function clickTab(textFragment) {
    const candidates = [...document.querySelectorAll('li, a, button, span, div, td')].filter(el => {
      const t = (el.textContent || '').trim();
      return t.toLowerCase().includes(textFragment.toLowerCase())
        && t.length < 100
        && el.children.length < 5;
    });
    if (!candidates.length) return false;
    candidates.sort((a, b) => a.querySelectorAll('*').length - b.querySelectorAll('*').length);
    candidates[0].click();
    return true;
  }

  // ── 3. Student / AIMCAT header ─────────────────────────────────────────────
  function getHeader() {
    const text = document.body.innerText;
    const idM   = text.match(/ID\s*Card\s*No\s*[:\|]\s*([A-Z0-9]+)/i);
    const nameM = text.match(/Name\s*[:\|]\s*([^|\n\r]+)/i);
    const testM = text.match(/Test\s*[:\|]\s*(AIMCAT\s*\d+)/i);
    const anyA  = text.match(/AIMCAT\s*(\d{4})/i);
    return {
      aimcatId:    testM ? testM[1].replace(/\s+/, '') : (anyA ? 'AIMCAT' + anyA[1] : 'UNKNOWN'),
      studentId:   idM   ? idM[1].trim()               : 'UNKNOWN',
      studentName: nameM ? nameM[1].trim().replace(/\|.*/, '').replace(/Test.*/i, '').trim() : 'UNKNOWN',
    };
  }

  // ── 4. Scorecard extraction ────────────────────────────────────────────────
  function extractScorecard() {
    const tbl = [...document.querySelectorAll('table')].find(t =>
      (t.innerText.includes('Right') || t.innerText.includes('NetScore')) && t.innerText.includes('Accuracy')
    );
    if (!tbl) return null;

    const keys = ['varc', 'dilr', 'qa', 'total'];
    const out  = Object.fromEntries(keys.map(k => [k, {}]));

    for (const row of tbl.querySelectorAll('tr')) {
      const cells = [...row.querySelectorAll('td, th')];
      if (cells.length < 2) continue;
      const lbl  = cells[0].innerText.trim().toLowerCase();
      const vals = cells.slice(1, 5).map(c => c.innerText.trim());
      const sf   = (f, fn) => keys.forEach((k, i) => { out[k][f] = fn(vals[i] ?? ''); });
      const num  = v => parseFloat(v) || 0;
      const int  = v => parseInt(v) || null;
      const dash = v => (!v || v === '-' || v === '--') ? null : parseFloat(v);

      if (lbl.includes('right') && lbl.includes('wrong'))
        keys.forEach((k, i) => { const m = (vals[i]||'').match(/(\d+)\s*[&\s]\s*(\d+)/); if(m){out[k].right=+m[1];out[k].wrong=+m[2];} });
      else if (lbl.includes('accuracy'))                                              sf('accuracy', num);
      else if (lbl.includes('netscore') || lbl.includes('net score'))                sf('netScore', num);
      else if (lbl.includes('cutoff'))                                                sf('cutoff', dash);
      else if (lbl.includes('highest'))                                               sf('highestScore', num);
      else if (lbl.includes('all india rank'))                                        sf('allIndiaRank', int);
      else if (lbl.includes('city rank'))                                             sf('cityRank', int);
      else if (lbl.includes('percentile') && !lbl.includes('percentage'))            sf('percentile', num);
      else if (lbl.includes('percentage'))                                            sf('percentageScore', num);
    }
    return out;
  }

  // ── 5. Sub Area extraction ─────────────────────────────────────────────────
  // After clicking Sub Area tab:
  //   - Page has 3 collapsed accordion sections: VA/RC, DI/LR, QA
  //   - Must expand each by clicking its header row
  //   - Each section has a table: Subarea | No.of Q's | Attempted | Left Out |
  //                               Judicious Selection | Judicious Leaving Out |
  //                               Remarks | Accuracy
  //   - Attempted/Left Out cells contain colored buttons: "10/E" = Q10 Easy
  //     green = Good Decision, red = Could Improve

  function isGreen(el) {
    const bg = getComputedStyle(el).backgroundColor;
    const m  = bg.match(/\d+/g);
    if (!m || m.length < 3) return false;
    return +m[1] > 120 && +m[0] < 150 && +m[2] < 150; // green dominant
  }

  function parseQuestionButtons(cell) {
    // Buttons contain text like "10/E" or "5/M"
    // Try <button>, <span>, <div> with that pattern
    const btns = [...cell.querySelectorAll('button, span, div, input')].filter(el => {
      const t = el.textContent.trim();
      return /^\d+\/[EMDV]+$/.test(t) && el.children.length === 0;
    });

    // Fallback: read text directly and parse "10/E" tokens
    if (btns.length === 0) {
      const tokens = (cell.innerText || '').match(/\d+\/[EMDV]+/g) || [];
      return tokens.map(t => {
        const [qNo, diff] = t.split('/');
        return { qNo: +qNo, difficulty: diff, goodDecision: null };
      });
    }

    return btns.map(btn => {
      const t = btn.textContent.trim();
      const [qNo, diff] = t.split('/');
      return { qNo: +qNo, difficulty: diff, goodDecision: isGreen(btn) };
    });
  }

  async function extractSubarea() {
    const out = {};

    // The three section names in the accordion
    const sectionNames = ['VA/RC', 'DI/LR', 'QA'];
    const sectionKeys  = { 'VA/RC': 'varc', 'DI/LR': 'dilr', 'QA': 'qa' };

    // Expand each accordion section by clicking its header
    for (const name of sectionNames) {
      // Find the header row for this section — look for an element that contains
      // exactly this section name (short text) and is clickable
      const header = [...document.querySelectorAll('tr, div, li, span')].find(el => {
        const t = el.textContent.trim();
        return (t === name || t.startsWith(name + ' ') || t.endsWith(' ' + name))
          && t.length < 20;
      });
      if (header) { header.click(); await wait(600); }
      else { console.warn('[AIMCAT] Accordion header not found for:', name); }
    }

    await wait(500); // let all sections finish rendering

    // Now find each section's table
    // Strategy: find all tables that have a "Subarea" or "Judicious" column header
    const allTables = [...document.querySelectorAll('table')].filter(t =>
      t.innerText.includes('Judicious') || t.innerText.toLowerCase().includes('subarea')
    );

    // Associate each table with its section by checking nearby heading text
    for (const tbl of allTables) {
      // Walk up to find section heading (VA/RC / DI/LR / QA)
      let sectionKey = null;
      let el = tbl;
      for (let i = 0; i < 8 && !sectionKey; i++) {
        el = el.parentElement;
        if (!el) break;
        const headingEl = [...el.querySelectorAll('*')].find(e => {
          const t = e.textContent.trim();
          return sectionNames.includes(t) && e.children.length === 0;
        });
        if (headingEl) sectionKey = sectionKeys[headingEl.textContent.trim()];
      }
      // Fallback: infer from order (first subarea table = varc, second = dilr, third = qa)
      if (!sectionKey) {
        const idx = allTables.indexOf(tbl);
        sectionKey = ['varc', 'dilr', 'qa'][idx] || `section${idx}`;
      }

      if (!out[sectionKey]) out[sectionKey] = [];

      for (const row of tbl.querySelectorAll('tr')) {
        const cells = [...row.querySelectorAll('td, th')];
        if (cells.length < 4) continue;
        const subareaName = cells[0].innerText.trim();
        // Skip header rows
        if (!subareaName || /^(subarea|no\.|question|judicious|accuracy|remarks)/i.test(subareaName)) continue;

        const numQ     = parseInt(cells[1]?.innerText.trim()) || 0;
        const attempted  = parseQuestionButtons(cells[2]);
        const leftOut    = parseQuestionButtons(cells[3]);
        const judSel     = cells[4] ? (cells[4].innerText.trim() === '-' ? null : parseFloat(cells[4].innerText.trim())) : null;
        const judLeave   = cells[5] ? (cells[5].innerText.trim() === '-' ? null : parseFloat(cells[5].innerText.trim())) : null;
        const accuracy   = cells[7] ? (cells[7].innerText.trim() === '-' ? null : parseFloat(cells[7].innerText.trim())) : null;

        out[sectionKey].push({
          subarea:               subareaName,
          numQ,
          attempted,             // [{qNo, difficulty, goodDecision}]
          leftOut,               // [{qNo, difficulty, goodDecision}]
          judiciousSelection:    judSel,
          judiciousLeavingOut:   judLeave,
          accuracy,
        });
      }
    }

    return Object.keys(out).length > 0 ? out : null;
  }

  // ── 6. Time Analysis (raw table — already works from v2) ──────────────────
  function dumpAllTables() {
    return [...document.querySelectorAll('table')].map((t, i) => ({
      i, rows: [...t.querySelectorAll('tr')]
        .map(r => [...r.querySelectorAll('td, th')].map(c => c.innerText.trim()))
        .filter(r => r.some(c => c))
    }));
  }

  // ── Main ──────────────────────────────────────────────────────────────────
  const hdr = getHeader();
  const result = { ...hdr, extractedAt: new Date().toISOString() };

  // Step 1: Scorecard (current tab)
  result.scorecard     = extractScorecard();

  // Step 2: Sub Area wise Performance
  // Tab label confirmed as "Sub Area wise Performance" — try multiple variants
  const csub = clickTab('Sub Area') || clickTab('Subarea') || clickTab('sub area') || clickTab('wise Performance');
  await wait(2500); // React render + initial load
  result.subarea       = await extractSubarea();
  result._subareaDebug = dumpAllTables(); // raw tables for debugging

  // Step 3: Time Spent Analysis
  const ctime = clickTab('Time Spent') || clickTab('Time spent');
  await wait(2000);
  result._rawTimeAnalysis = dumpAllTables();

  // ── Download ───────────────────────────────────────────────────────────────
  const json = JSON.stringify(result, null, 2);
  const fn   = `aimcat_${hdr.studentId}_${hdr.aimcatId}.json`;
  const a    = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(new Blob([json], { type: 'application/json' })),
    download: fn,
  });
  document.body.appendChild(a); a.click(); a.remove();

  // ── Overlay ────────────────────────────────────────────────────────────────
  const sc = result.scorecard;
  const ss = sc
    ? `VARC  ${sc.varc?.accuracy??'?'}%  net ${sc.varc?.netScore??'?'}  ${sc.varc?.percentile??'?'}%ile\n` +
      `DILR  ${sc.dilr?.accuracy??'?'}%  net ${sc.dilr?.netScore??'?'}  ${sc.dilr?.percentile??'?'}%ile\n` +
      `QA    ${sc.qa?.accuracy??'?'}%  net ${sc.qa?.netScore??'?'}  ${sc.qa?.percentile??'?'}%ile\n` +
      `Total net ${sc.total?.netScore??'?'}  AIR ${sc.total?.allIndiaRank??'?'}  ${sc.total?.percentile??'?'}%ile`
    : 'Scorecard not found';

  const subareaCount = result.subarea
    ? Object.entries(result.subarea).map(([k,v]) => `${k.toUpperCase()}:${v.length} rows`).join('  ')
    : 'Not extracted';

  const diag = `Sub Area tab clicked: ${csub?'✅':'❌'}  |  Time tab clicked: ${ctime?'✅':'❌'}\n` +
               `Subarea rows: ${subareaCount}`;

  const ov = document.createElement('div');
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.82);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif';
  ov.innerHTML = `<div style="background:#fff;padding:24px;border-radius:10px;max-width:660px;width:94%;max-height:90vh;overflow:auto">
    <h3 style="margin:0 0 12px;color:#1a3a6e">✅ AIMCAT Extracted</h3>
    <p><b>${result.studentName}</b> &nbsp;<code>${result.studentId}</code> &nbsp;|&nbsp; <b>${result.aimcatId}</b></p>
    <pre style="background:#f0f4ff;padding:10px;border-radius:6px;font-size:12px">${ss}</pre>
    <pre style="background:#f9f9f9;padding:8px;border-radius:6px;font-size:11px;color:#555">${diag}</pre>
    <p style="font-size:12px">File downloaded: <code>${fn}</code></p>
    <button id="_ac_c" style="padding:6px 18px;background:#1a3a6e;color:#fff;border:none;border-radius:5px;cursor:pointer;margin-right:8px">Copy JSON</button>
    <button onclick="this.closest('div').parentNode.remove()" style="padding:6px 18px;border:1px solid #ccc;border-radius:5px;cursor:pointer">Close</button>
    <pre style="margin-top:12px;font-size:10px;background:#f5f5f5;padding:10px;border-radius:4px;overflow:auto;max-height:180px">${json.slice(0,2500)}</pre>
  </div>`;
  document.body.appendChild(ov);
  document.getElementById('_ac_c').onclick = () =>
    navigator.clipboard.writeText(json).then(() => alert('✅ Copied!'));

})();


// ═══════════════════════════════════════════════════════════════════════════
// BOOKMARKLET ONE-LINER — copy everything on the next line as bookmark URL:
// ═══════════════════════════════════════════════════════════════════════════
//
// javascript:(async function(){'use strict';const wait=ms=>new Promise(r=>setTimeout(r,ms));if(!location.href.includes('aimcat')&&!document.body.innerText.toLowerCase().includes('aimcat')){alert('❌ Open an AIMCAT results page first.');return;}function clickTab(f){const c=[...document.querySelectorAll('li,a,button,span,div,td')].filter(e=>{const t=(e.textContent||'').trim();return t.toLowerCase().includes(f.toLowerCase())&&t.length<100&&e.children.length<5;});if(!c.length)return false;c.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);c[0].click();return true;}function getHeader(){const tx=document.body.innerText;const iM=tx.match(/ID\s*Card\s*No\s*[:\|]\s*([A-Z0-9]+)/i);const nM=tx.match(/Name\s*[:\|]\s*([^|\n\r]+)/i);const tM=tx.match(/Test\s*[:\|]\s*(AIMCAT\s*\d+)/i);const aA=tx.match(/AIMCAT\s*(\d{4})/i);return{aimcatId:tM?tM[1].replace(/\s+/,''):(aA?'AIMCAT'+aA[1]:'UNKNOWN'),studentId:iM?iM[1].trim():'UNKNOWN',studentName:nM?nM[1].trim().replace(/\|.*/,'').replace(/Test.*/i,'').trim():'UNKNOWN'};}function extractScorecard(){const tbl=[...document.querySelectorAll('table')].find(t=>(t.innerText.includes('Right')||t.innerText.includes('NetScore'))&&t.innerText.includes('Accuracy'));if(!tbl)return null;const keys=['varc','dilr','qa','total'];const out=Object.fromEntries(keys.map(k=>[k,{}]));for(const row of tbl.querySelectorAll('tr')){const cells=[...row.querySelectorAll('td,th')];if(cells.length<2)continue;const lbl=cells[0].innerText.trim().toLowerCase();const vals=cells.slice(1,5).map(c=>c.innerText.trim());const sf=(f,fn)=>keys.forEach((k,i)=>{out[k][f]=fn(vals[i]??'');});const num=v=>parseFloat(v)||0;const int=v=>parseInt(v)||null;const dash=v=>(!v||v==='-'||v==='--')?null:parseFloat(v);if(lbl.includes('right')&&lbl.includes('wrong'))keys.forEach((k,i)=>{const m=(vals[i]||'').match(/(\d+)\s*[&\s]\s*(\d+)/);if(m){out[k].right=+m[1];out[k].wrong=+m[2];}});else if(lbl.includes('accuracy'))sf('accuracy',num);else if(lbl.includes('netscore')||lbl.includes('net score'))sf('netScore',num);else if(lbl.includes('cutoff'))sf('cutoff',dash);else if(lbl.includes('highest'))sf('highestScore',num);else if(lbl.includes('all india rank'))sf('allIndiaRank',int);else if(lbl.includes('city rank'))sf('cityRank',int);else if(lbl.includes('percentile')&&!lbl.includes('percentage'))sf('percentile',num);else if(lbl.includes('percentage'))sf('percentageScore',num);}return out;}function isGreen(el){const bg=getComputedStyle(el).backgroundColor;const m=bg.match(/\d+/g);if(!m||m.length<3)return false;return+m[1]>120&&+m[0]<150&&+m[2]<150;}function parseQBtns(cell){const btns=[...cell.querySelectorAll('button,span,div,input')].filter(e=>{const t=e.textContent.trim();return /^\d+\/[EMDV]+$/.test(t)&&e.children.length===0;});if(!btns.length){return((cell.innerText||'').match(/\d+\/[EMDV]+/g)||[]).map(t=>{const[q,d]=t.split('/');return{qNo:+q,difficulty:d,goodDecision:null};});}return btns.map(b=>{const t=b.textContent.trim();const[q,d]=t.split('/');return{qNo:+q,difficulty:d,goodDecision:isGreen(b)};});}async function extractSubarea(){const out={};const sN=['VA/RC','DI/LR','QA'];const sK={'VA/RC':'varc','DI/LR':'dilr','QA':'qa'};for(const name of sN){const hdr=[...document.querySelectorAll('tr,div,li,span')].find(e=>{const t=e.textContent.trim();return(t===name||t.startsWith(name+' ')||t.endsWith(' '+name))&&t.length<20;});if(hdr){hdr.click();await wait(600);}}await wait(500);const allT=[...document.querySelectorAll('table')].filter(t=>t.innerText.includes('Judicious')||t.innerText.toLowerCase().includes('subarea'));for(const tbl of allT){let sK2=null;let el=tbl;for(let i=0;i<8&&!sK2;i++){el=el.parentElement;if(!el)break;const hEl=[...el.querySelectorAll('*')].find(e=>{const t=e.textContent.trim();return sN.includes(t)&&e.children.length===0;});if(hEl)sK2=sK[hEl.textContent.trim()];}if(!sK2){const idx=allT.indexOf(tbl);sK2=['varc','dilr','qa'][idx]||`s${idx}`;}if(!out[sK2])out[sK2]=[];for(const row of tbl.querySelectorAll('tr')){const cells=[...row.querySelectorAll('td,th')];if(cells.length<4)continue;const sn=cells[0].innerText.trim();if(!sn||/^(subarea|no\.|question|judicious|accuracy|remarks)/i.test(sn))continue;const numQ=parseInt(cells[1]?.innerText.trim())||0;const atm=parseQBtns(cells[2]);const lo=parseQBtns(cells[3]);const js=cells[4]?(cells[4].innerText.trim()==='-'?null:parseFloat(cells[4].innerText.trim())):null;const jl=cells[5]?(cells[5].innerText.trim()==='-'?null:parseFloat(cells[5].innerText.trim())):null;const acc=cells[7]?(cells[7].innerText.trim()==='-'?null:parseFloat(cells[7].innerText.trim())):null;out[sK2].push({subarea:sn,numQ,attempted:atm,leftOut:lo,judiciousSelection:js,judiciousLeavingOut:jl,accuracy:acc});}}return Object.keys(out).length>0?out:null;}function dumpTables(){return[...document.querySelectorAll('table')].map((t,i)=>({i,rows:[...t.querySelectorAll('tr')].map(r=>[...r.querySelectorAll('td,th')].map(c=>c.innerText.trim())).filter(r=>r.some(c=>c))}));}const hdr=getHeader();const res={...hdr,extractedAt:new Date().toISOString()};res.scorecard=extractScorecard();const csub=clickTab('Sub Area')||clickTab('Subarea')||clickTab('wise Performance');await wait(2500);res.subarea=await extractSubarea();res._subareaDebug=dumpTables();const ctime=clickTab('Time Spent')||clickTab('Time spent');await wait(2000);res._rawTimeAnalysis=dumpTables();const json=JSON.stringify(res,null,2);const fn=`aimcat_${hdr.studentId}_${hdr.aimcatId}.json`;const a=Object.assign(document.createElement('a'),{href:URL.createObjectURL(new Blob([json],{type:'application/json'})),download:fn});document.body.appendChild(a);a.click();a.remove();const sc=res.scorecard;const ss=sc?`VARC ${sc.varc?.accuracy??'?'}%  net ${sc.varc?.netScore??'?'}  ${sc.varc?.percentile??'?'}%ile\nDILR ${sc.dilr?.accuracy??'?'}%  net ${sc.dilr?.netScore??'?'}  ${sc.dilr?.percentile??'?'}%ile\nQA   ${sc.qa?.accuracy??'?'}%  net ${sc.qa?.netScore??'?'}  ${sc.qa?.percentile??'?'}%ile\nTotal net ${sc.total?.netScore??'?'}  AIR ${sc.total?.allIndiaRank??'?'}  ${sc.total?.percentile??'?'}%ile`:'Scorecard not found';const sac=res.subarea?Object.entries(res.subarea).map(([k,v])=>`${k}:${v.length}rows`).join(' '):'❌ not extracted';const ov=document.createElement('div');ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.82);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif';ov.innerHTML=`<div style="background:#fff;padding:24px;border-radius:10px;max-width:660px;width:94%;max-height:90vh;overflow:auto"><h3 style="color:#1a3a6e">✅ AIMCAT v3 Extracted</h3><p><b>${res.studentName}</b> <code>${res.studentId}</code> | <b>${res.aimcatId}</b></p><pre style="background:#f0f4ff;padding:10px;border-radius:6px;font-size:12px">${ss}</pre><p style="font-size:12px">Sub Area: ${sac}<br>Sub tab: ${csub?'✅':'❌'} | Time tab: ${ctime?'✅':'❌'}<br>File: <code>${fn}</code></p><button id="_ac_c" style="padding:6px 18px;background:#1a3a6e;color:#fff;border:none;border-radius:5px;cursor:pointer;margin-right:8px">Copy JSON</button><button onclick="this.closest('div').parentNode.remove()" style="padding:6px 18px;border:1px solid #ccc;border-radius:5px;cursor:pointer">Close</button><pre style="margin-top:12px;font-size:10px;background:#f5f5f5;padding:10px;border-radius:4px;overflow:auto;max-height:180px">${json.slice(0,2500)}</pre></div>`;document.body.appendChild(ov);document.getElementById('_ac_c').onclick=()=>navigator.clipboard.writeText(json).then(()=>alert('✅ Copied!'));})();
