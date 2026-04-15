/**
 * TIME Madurai – AIMCAT Data Extractor Bookmarklet
 *
 * How to install:
 *   1. Copy the one-liner at the very bottom of this file
 *   2. Create a new bookmark in Chrome → paste it as the URL → name it "Extract AIMCAT"
 *
 * How to use:
 *   1. Log into time4education.com and open any AIMCAT detailed results page
 *   2. Click the "Extract AIMCAT" bookmark
 *   3. The bookmarklet will:
 *        a. Cycle through Scorecard → Subarea-wise Analysis → Time spent analysis tabs
 *        b. Extract all structured data
 *        c. Download a JSON file  (e.g. MDCAB6A010_AIMCAT2724.json)
 *        d. Show a summary overlay with a "Copy JSON" button
 *
 * Output JSON shape:
 * {
 *   aimcatId, studentId, studentName, extractedAt,
 *   scorecard: { varc, dilr, qa, total } each with { right, wrong, accuracy, netScore, cutoff, highestScore, allIndiaRank, cityRank, percentile, percentageScore },
 *   subarea:   { varc: [...], dilr: [...], qa: [...] } each row = { subarea, numQ, attempted, attemptedCorrect, attemptedWrong, leftOut, judiciousSelection, judiciousLeavingOut, accuracy },
 *   timeAnalysis: { 'VA/RC': {...}, 'DI/LR': {...}, 'QA': {...} } each = { totalSecs, overInvested, wrongEM, skippedEM, fastGuesses }
 * }
 */

(async function () {
  'use strict';

  const wait = ms => new Promise(r => setTimeout(r, ms));
  const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];

  // ── 1. Locate the document (content is inside an iframe) ──────────────────
  let D = document;
  for (const f of $$('iframe')) {
    try {
      const fd = f.contentDocument || f.contentWindow.document;
      if (fd && $$('table', fd).length > 0) { D = fd; break; }
    } catch (e) { /* cross-origin, skip */ }
  }

  // Safety check — are we on the right page?
  if (!D.body.innerText.includes('AIMCAT')) {
    alert('❌ Please open an AIMCAT detailed results page first.');
    return;
  }

  // ── 2. Click a tab by its label text ──────────────────────────────────────
  function clickTab(fragment) {
    const btn = $$('input[type=button], button', D)
      .find(b => (b.value || b.textContent || '').toLowerCase().includes(fragment.toLowerCase()));
    if (btn) { btn.click(); return true; }
    return false;
  }

  // ── 3. Extract student / AIMCAT header ────────────────────────────────────
  function getHeader() {
    const allTds = $$('td', D);
    const titleTd = allTds.find(td => /AIMCAT\s*\d{4}/i.test(td.innerText));
    const aimcatNum = ((titleTd ? titleTd.innerText : '') + D.title).match(/AIMCAT\s*(\d{4})/i);

    const studentTd = allTds.find(td =>
      /Id\s*:/i.test(td.innerText) && /Name\s*:/i.test(td.innerText));
    let studentId = '', studentName = '';
    if (studentTd) {
      const t = studentTd.innerText;
      studentId   = (t.match(/Id\s*:\s*(\S+)/i) || [])[1] || '';
      studentName = ((t.match(/Name\s*:\s*(.+)/i) || [])[1] || '')
                      .replace(/AIMCAT\d+/gi, '').trim();
    }
    return {
      aimcatId:    aimcatNum ? 'AIMCAT' + aimcatNum[1] : 'UNKNOWN',
      studentId,
      studentName,
    };
  }

  // ── 4. Scorecard extraction ───────────────────────────────────────────────
  function extractScorecard() {
    const tbl = $$('table', D).find(t =>
      t.innerText.includes('Right & Wrong') && t.innerText.includes('NetScore'));
    if (!tbl) { console.warn('[AIMCAT] Scorecard table not found'); return null; }

    const keys = ['varc', 'dilr', 'qa', 'total'];
    const out  = Object.fromEntries(keys.map(k => [k, {}]));

    for (const row of $$('tr', tbl)) {
      const cells = $$('td', row);
      if (cells.length < 2) continue;
      const lbl  = cells[0].innerText.trim().toLowerCase();
      const vals = cells.slice(1, 5).map(c => c.innerText.trim());

      const set = (field, fn) => keys.forEach((k, i) => { out[k][field] = fn(vals[i]); });

      if (lbl.includes('right') && lbl.includes('wrong')) {
        keys.forEach((k, i) => {
          const m = (vals[i] || '').match(/(\d+)\s*&\s*(\d+)/);
          if (m) { out[k].right = +m[1]; out[k].wrong = +m[2]; }
        });
      } else if (lbl.includes('accuracy')) {
        set('accuracy', v => parseFloat(v) || 0);
      } else if (lbl.includes('netscore')) {
        set('netScore', v => parseFloat(v) || 0);
      } else if (lbl.includes('cutoff')) {
        set('cutoff', v => (v === '-' || v === '') ? null : parseFloat(v));
      } else if (lbl.includes('highest')) {
        set('highestScore', v => parseFloat(v) || 0);
      } else if (lbl.includes('all india rank')) {
        set('allIndiaRank', v => parseInt(v) || null);
      } else if (lbl.includes('city rank')) {
        set('cityRank', v => parseInt(v) || null);
      } else if (lbl.includes('percentile')) {
        set('percentile', v => parseFloat(v) || 0);
      } else if (lbl.includes('percentage score')) {
        set('percentageScore', v => parseFloat(v) || 0);
      }
    }
    return out;
  }

  // ── 5. Subarea extraction ─────────────────────────────────────────────────
  function extractSubarea() {
    // There are 3 tables: one each for VA/RC, DI/LR, QA
    // Identify by having a "Subarea" cell in the header, but NOT "NetScore"
    const subareaTbls = $$('table', D).filter(t => {
      const text = t.innerText;
      return text.includes('Subarea') && !text.includes('NetScore') && !text.includes('Right & Wrong');
    });

    const sectionOrder = ['varc', 'dilr', 'qa'];
    const out = {};

    subareaTbls.slice(0, 3).forEach((tbl, idx) => {
      const section = sectionOrder[idx];
      out[section] = [];

      for (const row of $$('tr', tbl)) {
        const cells = $$('td', row);
        if (cells.length < 7) continue;
        const subareaText = cells[0].innerText.trim();
        // Skip header rows
        if (!subareaText || /^(subarea|no\.of|questions|judicious)/i.test(subareaText)) continue;

        const numQ = parseInt(cells[1].innerText.trim()) || 0;

        // Question buttons: <input type="button" value="4/D"> — count all of them
        // Fallback: count tokens matching "##/X" pattern in cell text
        const countButtons = cell => {
          const btns = $$('input[type=button], button', cell);
          return btns.length > 0
            ? btns.length
            : (cell.innerText.match(/\d+\/[A-Z]+/g) || []).length;
        };

        // Detect green (correct) vs red (wrong) by computed RGB
        const isGreenRGB = el => {
          const rgb = (el.style.backgroundColor || getComputedStyle(el).backgroundColor || '');
          const m = rgb.match(/\d+/g);
          if (!m) return false;
          return (+m[1] > 120 && +m[0] < 120); // green dominant
        };
        const isRedRGB = el => {
          const rgb = (el.style.backgroundColor || getComputedStyle(el).backgroundColor || '');
          const m = rgb.match(/\d+/g);
          if (!m) return false;
          return (+m[0] > 150 && +m[1] < 100); // red dominant
        };

        const analyseButtons = cell => {
          const btns = $$('input[type=button], button', cell);
          let correct = 0, wrong = 0;
          for (const b of btns) {
            if (isGreenRGB(b)) correct++;
            else if (isRedRGB(b)) wrong++;
          }
          return { count: btns.length, correct, wrong };
        };

        const attempted = analyseButtons(cells[2]);
        const leftOut   = countButtons(cells[3]);

        const parse = s => (!s || s === '-' || s === '...' || s === '---') ? null : parseFloat(s);
        const accuracyCell = cells[7] || cells[6];

        out[section].push({
          subarea:             subareaText,
          numQ,
          attempted:           attempted.count,
          attemptedCorrect:    attempted.correct,
          attemptedWrong:      attempted.wrong,
          leftOut,
          judiciousSelection:  parse(cells[4].innerText.trim()),
          judiciousLeavingOut: parse(cells[5].innerText.trim()),
          accuracy:            parse(accuracyCell ? accuracyCell.innerText.trim() : ''),
        });
      }
    });

    return out;
  }

  // ── 6. Time analysis extraction (aggregated per section) ──────────────────
  function extractTimeAnalysis() {
    const tbl = $$('table', D).find(t =>
      t.innerText.includes('Time Spent') &&
      t.innerText.includes('Difficulty Level') &&
      t.innerText.includes('Question'));
    if (!tbl) { console.warn('[AIMCAT] Time analysis table not found'); return null; }

    const agg = {};

    for (const row of $$('tr', tbl)) {
      const cells = $$('td', row);
      if (cells.length < 11) continue;
      if (isNaN(parseInt(cells[0].innerText.trim()))) continue; // skip header rows

      const section  = cells[2].innerText.trim(); // 'VA/RC', 'DI/LR', 'QA'
      const myCell   = cells[3];
      const myAns    = myCell.innerText.trim();
      const diff     = cells[7].innerText.trim();  // 'E', 'M', 'D', 'VD'
      const timeStr  = cells[10].innerText.trim(); // '#' = not attempted
      const avgAll   = parseInt(cells[11] ? cells[11].innerText.trim() : '0') || 0;

      const skipped  = myAns === 'NA' || myAns === '' || timeStr === '#';
      const timeSecs = skipped ? 0 : (parseInt(timeStr) || 0);

      // Detect correct answer from background colour of My Answer cell
      const rgb = myCell.style.backgroundColor || getComputedStyle(myCell).backgroundColor || '';
      const ch  = (rgb.match(/\d+/g) || []).map(Number);
      const correct = !skipped && ch.length >= 2 && ch[1] > 120 && ch[0] < 120; // green

      if (!agg[section]) {
        agg[section] = { totalSecs: 0, overInvested: 0, wrongEM: 0, skippedEM: 0, fastGuesses: 0 };
      }
      const s = agg[section];
      s.totalSecs += timeSecs;

      const em = diff === 'E' || diff === 'M';
      if (skipped && em)                              s.skippedEM++;
      if (!skipped && !correct && em)                 s.wrongEM++;
      if (!skipped && avgAll > 0 && timeSecs > avgAll * 2.5) s.overInvested++;
      if (!skipped && timeSecs > 0 && timeSecs < 15) s.fastGuesses++;
    }

    return agg;
  }

  // ── Main ──────────────────────────────────────────────────────────────────
  const hdr  = getHeader();
  const data = { ...hdr, extractedAt: new Date().toISOString() };

  // Cycle through tabs and extract
  clickTab('Scorecard');   await wait(800);
  data.scorecard    = extractScorecard();

  clickTab('Subarea');     await wait(1500);
  data.subarea      = extractSubarea();

  clickTab('Time spent');  await wait(1500);
  data.timeAnalysis = extractTimeAnalysis();

  const json = JSON.stringify(data, null, 2);

  // ── Download JSON file ────────────────────────────────────────────────────
  const filename = `${hdr.studentId || 'student'}_${hdr.aimcatId || 'AIMCAT'}.json`;
  const a = Object.assign(document.createElement('a'), {
    href:     URL.createObjectURL(new Blob([json], { type: 'application/json' })),
    download: filename,
  });
  document.body.appendChild(a); a.click(); a.remove();

  // ── Summary overlay ───────────────────────────────────────────────────────
  const sc = data.scorecard;
  const scoreSummary = sc
    ? `VA/RC ${sc.varc.accuracy || 0}% (${sc.varc.netScore || 0} pts, ${sc.varc.percentile || 0} %ile) &nbsp;|&nbsp; DI/LR ${sc.dilr.accuracy || 0}% (${sc.dilr.netScore || 0} pts, ${sc.dilr.percentile || 0} %ile) &nbsp;|&nbsp; QA ${sc.qa.accuracy || 0}% (${sc.qa.netScore || 0} pts, ${sc.qa.percentile || 0} %ile)<br>Total: ${sc.total.netScore || 0} pts &nbsp;|&nbsp; Overall ${sc.total.percentile || 0}%ile &nbsp;|&nbsp; AIR ${sc.total.allIndiaRank || '-'}`
    : 'Scorecard not found';

  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.75);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;font-size:14px';
  overlay.innerHTML = `
    <div style="background:#fff;padding:24px;border-radius:10px;max-width:640px;width:92%;max-height:85vh;overflow:auto;box-shadow:0 8px 32px rgba(0,0,0,.4)">
      <h3 style="margin:0 0 14px;color:#1a3a6e">✅ AIMCAT Data Extracted</h3>
      <p style="margin:0 0 6px"><b>Student:</b> ${data.studentName} &nbsp;(<code>${data.studentId}</code>)</p>
      <p style="margin:0 0 12px"><b>Test:</b> ${data.aimcatId}</p>
      <p style="margin:0 0 16px;line-height:1.7">${scoreSummary}</p>
      <p style="margin:0 0 12px">
        <b>File downloaded:</b> <code>${filename}</code><br>
        <small style="color:#666">Use the import script to push this to Firestore.</small>
      </p>
      <button id="_aimcat_copy" style="padding:6px 16px;margin-right:8px;cursor:pointer;background:#1a3a6e;color:#fff;border:none;border-radius:4px">Copy JSON</button>
      <button onclick="this.closest('[style*=fixed]').remove()" style="padding:6px 16px;cursor:pointer;border:1px solid #ccc;border-radius:4px">Close</button>
      <pre style="margin-top:14px;font-size:10px;background:#f5f5f5;padding:10px;border-radius:4px;overflow:auto;max-height:220px">${json.slice(0, 3000)}${json.length > 3000 ? '\n…(truncated)' : ''}</pre>
    </div>`;
  document.body.appendChild(overlay);
  document.getElementById('_aimcat_copy').onclick = () =>
    navigator.clipboard.writeText(json).then(() => alert('JSON copied to clipboard!'));

})();

// ═══════════════════════════════════════════════════════════════════════════
// BOOKMARKLET ONE-LINER (paste this as the bookmark URL):
// ═══════════════════════════════════════════════════════════════════════════
//
// javascript:(async function(){'use strict';const wait=ms=>new Promise(r=>setTimeout(r,ms));const $$=(s,c)=>[...(c||document).querySelectorAll(s)];let D=document;for(const f of $$('iframe')){try{const fd=f.contentDocument||f.contentWindow.document;if(fd&&$$('table',fd).length>0){D=fd;break;}}catch(e){}}if(!D.body.innerText.includes('AIMCAT')){alert('❌ Please open an AIMCAT detailed results page first.');return;}function clickTab(frag){const btn=$$('input[type=button],button',D).find(b=>(b.value||b.textContent||'').toLowerCase().includes(frag.toLowerCase()));if(btn){btn.click();return true;}return false;}function getHeader(){const allTds=$$('td',D);const titleTd=allTds.find(td=>/AIMCAT\s*\d{4}/i.test(td.innerText));const aimcatNum=((titleTd?titleTd.innerText:'')+D.title).match(/AIMCAT\s*(\d{4})/i);const studentTd=allTds.find(td=>/Id\s*:/i.test(td.innerText)&&/Name\s*:/i.test(td.innerText));let studentId='',studentName='';if(studentTd){const t=studentTd.innerText;studentId=(t.match(/Id\s*:\s*(\S+)/i)||[])[1]||'';studentName=((t.match(/Name\s*:\s*(.+)/i)||[])[1]||'').replace(/AIMCAT\d+/gi,'').trim();}return{aimcatId:aimcatNum?'AIMCAT'+aimcatNum[1]:'UNKNOWN',studentId,studentName};}function extractScorecard(){const tbl=$$('table',D).find(t=>t.innerText.includes('Right & Wrong')&&t.innerText.includes('NetScore'));if(!tbl)return null;const keys=['varc','dilr','qa','total'];const out=Object.fromEntries(keys.map(k=>[k,{}]));for(const row of $$('tr',tbl)){const cells=$$('td',row);if(cells.length<2)continue;const lbl=cells[0].innerText.trim().toLowerCase();const vals=cells.slice(1,5).map(c=>c.innerText.trim());const set=(field,fn)=>keys.forEach((k,i)=>{out[k][field]=fn(vals[i]);});if(lbl.includes('right')&&lbl.includes('wrong'))keys.forEach((k,i)=>{const m=(vals[i]||'').match(/(\d+)\s*&\s*(\d+)/);if(m){out[k].right=+m[1];out[k].wrong=+m[2];}});else if(lbl.includes('accuracy'))set('accuracy',v=>parseFloat(v)||0);else if(lbl.includes('netscore'))set('netScore',v=>parseFloat(v)||0);else if(lbl.includes('cutoff'))set('cutoff',v=>(v==='-'||v==='')?null:parseFloat(v));else if(lbl.includes('highest'))set('highestScore',v=>parseFloat(v)||0);else if(lbl.includes('all india rank'))set('allIndiaRank',v=>parseInt(v)||null);else if(lbl.includes('city rank'))set('cityRank',v=>parseInt(v)||null);else if(lbl.includes('percentile'))set('percentile',v=>parseFloat(v)||0);else if(lbl.includes('percentage score'))set('percentageScore',v=>parseFloat(v)||0);}return out;}function extractSubarea(){const subareaTbls=$$('table',D).filter(t=>{const text=t.innerText;return text.includes('Subarea')&&!text.includes('NetScore')&&!text.includes('Right & Wrong');});const sectionOrder=['varc','dilr','qa'];const out={};subareaTbls.slice(0,3).forEach((tbl,idx)=>{const section=sectionOrder[idx];out[section]=[];for(const row of $$('tr',tbl)){const cells=$$('td',row);if(cells.length<7)continue;const subareaText=cells[0].innerText.trim();if(!subareaText||/^(subarea|no\.of|questions|judicious)/i.test(subareaText))continue;const numQ=parseInt(cells[1].innerText.trim())||0;const isGreenRGB=el=>{const rgb=(el.style.backgroundColor||getComputedStyle(el).backgroundColor||'');const m=rgb.match(/\d+/g);if(!m)return false;return(+m[1]>120&&+m[0]<120);};const isRedRGB=el=>{const rgb=(el.style.backgroundColor||getComputedStyle(el).backgroundColor||'');const m=rgb.match(/\d+/g);if(!m)return false;return(+m[0]>150&&+m[1]<100);};const analyseButtons=cell=>{const btns=$$('input[type=button],button',cell);let correct=0,wrong=0;for(const b of btns){if(isGreenRGB(b))correct++;else if(isRedRGB(b))wrong++;}return{count:btns.length,correct,wrong};};const countFallback=cell=>(cell.innerText.match(/\d+\/[A-Z]+/g)||[]).length;const attempted=analyseButtons(cells[2]);const leftOut=analyseButtons(cells[3]).count||countFallback(cells[3]);const parse=s=>(!s||s==='-'||s==='...'||s==='---')?null:parseFloat(s);const accuracyCell=cells[7]||cells[6];out[section].push({subarea:subareaText,numQ,attempted:attempted.count,attemptedCorrect:attempted.correct,attemptedWrong:attempted.wrong,leftOut,judiciousSelection:parse(cells[4].innerText.trim()),judiciousLeavingOut:parse(cells[5].innerText.trim()),accuracy:parse(accuracyCell?accuracyCell.innerText.trim():'')});}});return out;}function extractTimeAnalysis(){const tbl=$$('table',D).find(t=>t.innerText.includes('Time Spent')&&t.innerText.includes('Difficulty Level')&&t.innerText.includes('Question'));if(!tbl)return null;const agg={};for(const row of $$('tr',tbl)){const cells=$$('td',row);if(cells.length<11)continue;if(isNaN(parseInt(cells[0].innerText.trim())))continue;const section=cells[2].innerText.trim();const myCell=cells[3];const myAns=myCell.innerText.trim();const diff=cells[7].innerText.trim();const timeStr=cells[10].innerText.trim();const avgAll=parseInt(cells[11]?cells[11].innerText.trim():'0')||0;const skipped=myAns==='NA'||myAns===''||timeStr==='#';const timeSecs=skipped?0:(parseInt(timeStr)||0);const rgb=myCell.style.backgroundColor||getComputedStyle(myCell).backgroundColor||'';const ch=(rgb.match(/\d+/g)||[]).map(Number);const correct=!skipped&&ch.length>=2&&ch[1]>120&&ch[0]<120;if(!agg[section])agg[section]={totalSecs:0,overInvested:0,wrongEM:0,skippedEM:0,fastGuesses:0};const s=agg[section];s.totalSecs+=timeSecs;const em=diff==='E'||diff==='M';if(skipped&&em)s.skippedEM++;if(!skipped&&!correct&&em)s.wrongEM++;if(!skipped&&avgAll>0&&timeSecs>avgAll*2.5)s.overInvested++;if(!skipped&&timeSecs>0&&timeSecs<15)s.fastGuesses++;}return agg;}const hdr=getHeader();const data={...hdr,extractedAt:new Date().toISOString()};clickTab('Scorecard');await wait(800);data.scorecard=extractScorecard();clickTab('Subarea');await wait(1500);data.subarea=extractSubarea();clickTab('Time spent');await wait(1500);data.timeAnalysis=extractTimeAnalysis();const json=JSON.stringify(data,null,2);const filename=`${hdr.studentId||'student'}_${hdr.aimcatId||'AIMCAT'}.json`;const a=Object.assign(document.createElement('a'),{href:URL.createObjectURL(new Blob([json],{type:'application/json'})),download:filename});document.body.appendChild(a);a.click();a.remove();const sc=data.scorecard;const scoreSummary=sc?`VA/RC ${sc.varc.accuracy||0}% (${sc.varc.netScore||0} pts, ${sc.varc.percentile||0} %ile) | DI/LR ${sc.dilr.accuracy||0}% (${sc.dilr.netScore||0} pts, ${sc.dilr.percentile||0} %ile) | QA ${sc.qa.accuracy||0}% (${sc.qa.netScore||0} pts, ${sc.qa.percentile||0} %ile) — Total ${sc.total.netScore||0} pts, ${sc.total.percentile||0}%ile, AIR ${sc.total.allIndiaRank||'-'}`:'Scorecard not found';const overlay=document.createElement('div');overlay.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.75);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;font-size:14px';overlay.innerHTML=`<div style="background:#fff;padding:24px;border-radius:10px;max-width:640px;width:92%;max-height:85vh;overflow:auto;box-shadow:0 8px 32px rgba(0,0,0,.4)"><h3 style="margin:0 0 14px;color:#1a3a6e">✅ AIMCAT Data Extracted</h3><p><b>Student:</b> ${data.studentName} (<code>${data.studentId}</code>)</p><p><b>Test:</b> ${data.aimcatId}</p><p>${scoreSummary}</p><p><b>File:</b> <code>${filename}</code></p><button id="_ac" style="padding:6px 16px;margin-right:8px;cursor:pointer;background:#1a3a6e;color:#fff;border:none;border-radius:4px">Copy JSON</button><button onclick="this.closest('[style*=fixed]').remove()" style="padding:6px 16px;cursor:pointer;border:1px solid #ccc;border-radius:4px">Close</button><pre style="margin-top:14px;font-size:10px;background:#f5f5f5;padding:10px;border-radius:4px;overflow:auto;max-height:220px">${json.slice(0,3000)}</pre></div>`;document.body.appendChild(overlay);document.getElementById('_ac').onclick=()=>navigator.clipboard.writeText(json).then(()=>alert('Copied!'));})();
