/**
 * TIME Madurai – AIMCAT Data Extractor Bookmarklet (v2)
 *
 * How to install:
 *   1. Copy the one-liner at the very bottom of this file
 *   2. Create a new bookmark in Chrome → paste it as the URL → name it "Extract AIMCAT"
 *
 * How to use:
 *   1. Log into time4education.com and open an AIMCAT results page
 *      (URL should contain: /aimcats/results)
 *   2. Make sure you are on the Scorecard tab
 *   3. Click the "Extract AIMCAT" bookmark
 *   4. The bookmarklet will auto-click through tabs, extract data, and download JSON
 *
 * Page structure (confirmed):
 *   - No iframes — all data is in the main document
 *   - Tab navigation: React SPA, tabs are div/span elements
 *   - URL param: ?tab=scorecard, ?tab=subarea etc.
 *   - Student header: "ID Card No: MDCAB6A019 | Name: KeerthyPriya S | Test: AIMCAT2724"
 */

(async function () {
  'use strict';

  const wait = ms => new Promise(r => setTimeout(r, ms));

  // ── 1. Verify we're on the right page ────────────────────────────────────
  if (!location.href.includes('aimcat') && !document.body.innerText.toLowerCase().includes('aimcat')) {
    alert('❌ Please open an AIMCAT results page first.\n\nURL should contain: /aimcats/results');
    return;
  }

  // ── 2. Click a tab by searching ALL elements for matching text ────────────
  function clickTab(textFragment) {
    // Search any clickable-looking element, prefer short text matches (actual tab labels)
    const candidates = [...document.querySelectorAll('li, a, button, span, div')].filter(el => {
      const t = (el.textContent || '').trim();
      return t.toLowerCase().includes(textFragment.toLowerCase())
        && t.length < 80          // avoid matching large containers
        && el.children.length < 5; // avoid matching wrappers
    });
    if (candidates.length === 0) return false;
    // Prefer the shallowest element (closest to actual tab)
    candidates.sort((a, b) => a.querySelectorAll('*').length - b.querySelectorAll('*').length);
    candidates[0].click();
    return true;
  }

  // ── 3. Extract student / AIMCAT header info ───────────────────────────────
  function getHeader() {
    const text = document.body.innerText;

    // Match "ID Card No: MDCAB6A019" or "ID Card No | MDCAB6A019"
    const idMatch   = text.match(/ID\s*Card\s*No\s*[:\|]\s*([A-Z0-9]+)/i);
    // Match "Name: KeerthyPriya S" — stop at | or newline
    const nameMatch = text.match(/Name\s*[:\|]\s*([^|\n\r]+)/i);
    // Match "Test: AIMCAT2724"
    const testMatch = text.match(/Test\s*[:\|]\s*(AIMCAT\s*\d+)/i);
    // Fallback: AIMCAT number anywhere in the text
    const anyAimcat = text.match(/AIMCAT\s*(\d{4})/i);

    return {
      aimcatId:    testMatch  ? testMatch[1].replace(/\s+/, '')  : (anyAimcat ? 'AIMCAT' + anyAimcat[1] : 'UNKNOWN'),
      studentId:   idMatch    ? idMatch[1].trim()                : 'UNKNOWN',
      studentName: nameMatch  ? nameMatch[1].trim().replace(/\|.*/, '').replace(/Test.*/i, '').trim() : 'UNKNOWN',
    };
  }

  // ── 4. Extract the Summary/Scorecard table ────────────────────────────────
  function extractScorecard() {
    const tables = [...document.querySelectorAll('table')];
    // The scorecard table always has these row labels
    const tbl = tables.find(t =>
      (t.innerText.includes('Right') || t.innerText.includes('NetScore'))
      && t.innerText.includes('Accuracy')
    );
    if (!tbl) { console.warn('[AIMCAT] Scorecard table not found'); return null; }

    const keys = ['varc', 'dilr', 'qa', 'total'];
    const out  = Object.fromEntries(keys.map(k => [k, {}]));

    for (const row of tbl.querySelectorAll('tr')) {
      const cells = [...row.querySelectorAll('td, th')];
      if (cells.length < 2) continue;
      const lbl  = cells[0].innerText.trim().toLowerCase();
      // Take up to 4 value columns (VARC, DILR, QA, Total)
      const vals = cells.slice(1, 5).map(c => c.innerText.trim());

      const setField = (field, fn) => keys.forEach((k, i) => { out[k][field] = fn(vals[i] ?? ''); });
      const num  = v => parseFloat(v) || 0;
      const int  = v => parseInt(v)   || null;
      const dash = v => (!v || v === '-' || v === '--') ? null : parseFloat(v);

      if (lbl.includes('right') && lbl.includes('wrong')) {
        keys.forEach((k, i) => {
          const m = (vals[i] || '').match(/(\d+)\s*[&\s]\s*(\d+)/);
          if (m) { out[k].right = +m[1]; out[k].wrong = +m[2]; }
        });
      } else if (lbl.includes('accuracy'))        { setField('accuracy',        num);  }
        else if (lbl.includes('netscore') || lbl.includes('net score')) { setField('netScore', num); }
        else if (lbl.includes('cutoff'))           { setField('cutoff',           dash); }
        else if (lbl.includes('highest'))          { setField('highestScore',     num);  }
        else if (lbl.includes('all india rank'))   { setField('allIndiaRank',     int);  }
        else if (lbl.includes('city rank'))        { setField('cityRank',         int);  }
        else if (lbl.includes('percentile score') || (lbl.includes('percentile') && !lbl.includes('percentage'))) {
          setField('percentile', num);
        }
        else if (lbl.includes('percentage score') || (lbl.includes('percentage') && !lbl.includes('percentile'))) {
          setField('percentageScore', num);
        }
    }
    return out;
  }

  // ── 5. Generic: dump all tables on the current page as raw rows ───────────
  function dumpAllTables() {
    return [...document.querySelectorAll('table')].map((tbl, idx) => {
      const rows = [...tbl.querySelectorAll('tr')].map(row =>
        [...row.querySelectorAll('td, th')].map(c => c.innerText.trim())
      ).filter(r => r.length > 0 && r.some(c => c !== ''));
      return { tableIndex: idx, rows };
    });
  }

  // ── 6. Extract subarea tables (3 sections — structured) ──────────────────
  function extractSubarea() {
    const tables = [...document.querySelectorAll('table')];
    const subareaTables = tables.filter(t => {
      const txt = t.innerText;
      return txt.toLowerCase().includes('subarea') || txt.includes('Judicious');
    });
    if (subareaTables.length === 0) return null;

    const sectionKeys = ['varc', 'dilr', 'qa'];
    const out = {};

    subareaTables.slice(0, 3).forEach((tbl, idx) => {
      const key = sectionKeys[idx] || `section${idx}`;
      out[key] = [];
      for (const row of tbl.querySelectorAll('tr')) {
        const cells = [...row.querySelectorAll('td, th')];
        if (cells.length < 3) continue;
        const label = cells[0].innerText.trim();
        if (!label || /^(subarea|no\.|question|judicious|section)/i.test(label)) continue;
        // Each cell may contain multiple question buttons — just count them
        const countQ = cell => {
          const btns = [...cell.querySelectorAll('input[type=button], button, [class*="btn"], [class*="q-"]')];
          return btns.length || (cell.innerText.match(/\d/g) || []).length && parseInt(cell.innerText.trim()) || 0;
        };
        const parse = s => (!s || s === '-' || s === '---') ? null : parseFloat(s);
        out[key].push({
          subarea:  label,
          numQ:     parseInt(cells[1]?.innerText.trim()) || 0,
          raw:      cells.map(c => c.innerText.trim()), // keep raw for debugging
        });
      }
    });
    return out;
  }

  // ── 7. Extract time analysis table ────────────────────────────────────────
  function extractTimeAnalysis() {
    const tables = [...document.querySelectorAll('table')];
    const tbl = tables.find(t =>
      t.innerText.includes('Time') &&
      (t.innerText.includes('Difficulty') || t.innerText.includes('Question No'))
    );
    if (!tbl) return null;

    const agg = {};
    for (const row of tbl.querySelectorAll('tr')) {
      const cells = [...row.querySelectorAll('td')];
      if (cells.length < 5) continue;
      // Find the section column (VA/RC, DI/LR, QA) — usually col 2 or 3
      const sectionCell = cells.find(c => /VA\/RC|DI\/LR|QA/i.test(c.innerText.trim()));
      if (!sectionCell) continue;
      const section = sectionCell.innerText.trim();
      if (!agg[section]) agg[section] = { totalSecs: 0, questionCount: 0 };
      // Time is typically the last or second-to-last numeric column
      for (let i = cells.length - 1; i >= 0; i--) {
        const v = parseInt(cells[i].innerText.trim());
        if (!isNaN(v) && v > 0 && v < 600) { // plausible seconds
          agg[section].totalSecs += v;
          agg[section].questionCount++;
          break;
        }
      }
    }
    return Object.keys(agg).length > 0 ? agg : null;
  }

  // ── Main ──────────────────────────────────────────────────────────────────
  const hdr = getHeader();
  const result = {
    aimcatId:    hdr.aimcatId,
    studentId:   hdr.studentId,
    studentName: hdr.studentName,
    extractedAt: new Date().toISOString(),
  };

  // Step 1: Scorecard (should already be active)
  result.scorecard    = extractScorecard();
  result._rawScorecard = dumpAllTables();

  // Step 2: Subarea tab
  const clickedSubarea = clickTab('Subarea') || clickTab('subarea') || clickTab('Sub Area');
  await wait(2000);
  result.subarea      = extractSubarea();
  result._rawSubarea  = dumpAllTables();

  // Step 3: Time Spent tab
  const clickedTime = clickTab('Time Spent') || clickTab('Time spent') || clickTab('Time');
  await wait(2000);
  result.timeAnalysis     = extractTimeAnalysis();
  result._rawTimeAnalysis = dumpAllTables();

  // ── Download JSON ─────────────────────────────────────────────────────────
  const json     = JSON.stringify(result, null, 2);
  const filename = `aimcat_${hdr.studentId}_${hdr.aimcatId}.json`;
  const a = Object.assign(document.createElement('a'), {
    href:     URL.createObjectURL(new Blob([json], { type: 'application/json' })),
    download: filename,
  });
  document.body.appendChild(a); a.click(); a.remove();

  // ── Summary overlay ───────────────────────────────────────────────────────
  const sc = result.scorecard;
  const scoreSummary = sc ? [
    `VA/RC:  acc ${sc.varc?.accuracy ?? '?'}%,  net ${sc.varc?.netScore ?? '?'} pts,  ${sc.varc?.percentile ?? '?'} %ile`,
    `DI/LR:  acc ${sc.dilr?.accuracy ?? '?'}%,  net ${sc.dilr?.netScore ?? '?'} pts,  ${sc.dilr?.percentile ?? '?'} %ile`,
    `QA:     acc ${sc.qa?.accuracy   ?? '?'}%,  net ${sc.qa?.netScore   ?? '?'} pts,  ${sc.qa?.percentile   ?? '?'} %ile`,
    `Total:  net ${sc.total?.netScore ?? '?'} pts,  ${sc.total?.percentile ?? '?'} %ile,  AIR ${sc.total?.allIndiaRank ?? '?'}`,
  ].join('\n') : 'Scorecard not extracted';

  const diag = [
    `Scorecard table found: ${result.scorecard ? 'YES' : 'NO'}`,
    `Subarea tab clicked:   ${clickedSubarea ? 'YES' : 'NO'}`,
    `Time tab clicked:      ${clickedTime ? 'YES' : 'NO'}`,
    `Raw tables on page:    ${result._rawScorecard?.length ?? 0}`,
  ].join('\n');

  const ov = document.createElement('div');
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif';
  ov.innerHTML = `<div style="background:#fff;padding:24px;border-radius:10px;max-width:660px;width:94%;max-height:88vh;overflow:auto;box-shadow:0 8px 32px rgba(0,0,0,.5)">
    <h3 style="margin:0 0 12px;color:#1a3a6e">✅ AIMCAT Extracted</h3>
    <p><b>Student:</b> ${result.studentName} &nbsp;<code>${result.studentId}</code></p>
    <p><b>Test:</b> ${result.aimcatId}</p>
    <pre style="background:#f0f4ff;padding:10px;border-radius:6px;font-size:12px;white-space:pre">${scoreSummary}</pre>
    <pre style="background:#f9f9f9;padding:8px;border-radius:6px;font-size:11px;color:#666">${diag}</pre>
    <p style="font-size:12px;color:#555">File downloaded: <code>${filename}</code></p>
    <button id="_ac_copy" style="padding:6px 18px;margin-right:8px;background:#1a3a6e;color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:13px">Copy JSON</button>
    <button onclick="this.closest('div').parentNode.remove()" style="padding:6px 18px;border:1px solid #ccc;border-radius:5px;cursor:pointer;font-size:13px">Close</button>
    <pre style="margin-top:12px;font-size:10px;background:#f5f5f5;padding:10px;border-radius:4px;overflow:auto;max-height:200px">${json.slice(0, 2000)}${json.length > 2000 ? '\n…(truncated)' : ''}</pre>
  </div>`;
  document.body.appendChild(ov);
  document.getElementById('_ac_copy').onclick = () =>
    navigator.clipboard.writeText(json).then(() => alert('✅ JSON copied to clipboard!'));

})();


// ═══════════════════════════════════════════════════════════════════════════
// BOOKMARKLET ONE-LINER — copy everything below and paste as the bookmark URL
// ═══════════════════════════════════════════════════════════════════════════
//
// javascript:(async function(){'use strict';const wait=ms=>new Promise(r=>setTimeout(r,ms));if(!location.href.includes('aimcat')&&!document.body.innerText.toLowerCase().includes('aimcat')){alert('❌ Please open an AIMCAT results page first.');return;}function clickTab(txt){const els=[...document.querySelectorAll('li,a,button,span,div')].filter(e=>{const t=(e.textContent||'').trim();return t.toLowerCase().includes(txt.toLowerCase())&&t.length<80&&e.children.length<5;});if(!els.length)return false;els.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);els[0].click();return true;}function getHeader(){const text=document.body.innerText;const idM=text.match(/ID\s*Card\s*No\s*[:\|]\s*([A-Z0-9]+)/i);const nameM=text.match(/Name\s*[:\|]\s*([^|\n\r]+)/i);const testM=text.match(/Test\s*[:\|]\s*(AIMCAT\s*\d+)/i);const anyA=text.match(/AIMCAT\s*(\d{4})/i);return{aimcatId:testM?testM[1].replace(/\s+/,''):(anyA?'AIMCAT'+anyA[1]:'UNKNOWN'),studentId:idM?idM[1].trim():'UNKNOWN',studentName:nameM?nameM[1].trim().replace(/\|.*/,'').replace(/Test.*/i,'').trim():'UNKNOWN'};}function extractScorecard(){const tbl=[...document.querySelectorAll('table')].find(t=>(t.innerText.includes('Right')||t.innerText.includes('NetScore'))&&t.innerText.includes('Accuracy'));if(!tbl)return null;const keys=['varc','dilr','qa','total'];const out=Object.fromEntries(keys.map(k=>[k,{}]));for(const row of tbl.querySelectorAll('tr')){const cells=[...row.querySelectorAll('td,th')];if(cells.length<2)continue;const lbl=cells[0].innerText.trim().toLowerCase();const vals=cells.slice(1,5).map(c=>c.innerText.trim());const sf=(f,fn)=>keys.forEach((k,i)=>{out[k][f]=fn(vals[i]??'');});const num=v=>parseFloat(v)||0;const int=v=>parseInt(v)||null;const dash=v=>(!v||v==='-'||v==='--')?null:parseFloat(v);if(lbl.includes('right')&&lbl.includes('wrong'))keys.forEach((k,i)=>{const m=(vals[i]||'').match(/(\d+)\s*[&\s]\s*(\d+)/);if(m){out[k].right=+m[1];out[k].wrong=+m[2];}});else if(lbl.includes('accuracy'))sf('accuracy',num);else if(lbl.includes('netscore')||lbl.includes('net score'))sf('netScore',num);else if(lbl.includes('cutoff'))sf('cutoff',dash);else if(lbl.includes('highest'))sf('highestScore',num);else if(lbl.includes('all india rank'))sf('allIndiaRank',int);else if(lbl.includes('city rank'))sf('cityRank',int);else if(lbl.includes('percentile score')||(lbl.includes('percentile')&&!lbl.includes('percentage')))sf('percentile',num);else if(lbl.includes('percentage'))sf('percentageScore',num);}return out;}function dumpTables(){return[...document.querySelectorAll('table')].map((t,i)=>({i,rows:[...t.querySelectorAll('tr')].map(r=>[...r.querySelectorAll('td,th')].map(c=>c.innerText.trim())).filter(r=>r.some(c=>c))}));}const hdr=getHeader();const res={...hdr,extractedAt:new Date().toISOString()};res.scorecard=extractScorecard();res._rawScorecard=dumpTables();const cs=clickTab('Subarea')||clickTab('Sub Area');await wait(2000);res._rawSubarea=dumpTables();const ct=clickTab('Time Spent')||clickTab('Time spent');await wait(2000);res._rawTimeAnalysis=dumpTables();const json=JSON.stringify(res,null,2);const fn=`aimcat_${hdr.studentId}_${hdr.aimcatId}.json`;const a=Object.assign(document.createElement('a'),{href:URL.createObjectURL(new Blob([json],{type:'application/json'})),download:fn});document.body.appendChild(a);a.click();a.remove();const sc=res.scorecard;const ss=sc?`VARC ${sc.varc?.accuracy??'?'}% | ${sc.varc?.netScore??'?'}pts | ${sc.varc?.percentile??'?'}%ile\nDILR ${sc.dilr?.accuracy??'?'}% | ${sc.dilr?.netScore??'?'}pts | ${sc.dilr?.percentile??'?'}%ile\nQA   ${sc.qa?.accuracy??'?'}%  | ${sc.qa?.netScore??'?'}pts | ${sc.qa?.percentile??'?'}%ile\nTotal ${sc.total?.netScore??'?'}pts | ${sc.total?.percentile??'?'}%ile | AIR ${sc.total?.allIndiaRank??'?'}`:'Scorecard not found';const ov=document.createElement('div');ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif';ov.innerHTML=`<div style="background:#fff;padding:24px;border-radius:10px;max-width:640px;width:94%;max-height:88vh;overflow:auto"><h3 style="color:#1a3a6e">✅ AIMCAT Extracted</h3><p><b>${res.studentName}</b> &nbsp;<code>${res.studentId}</code> &nbsp;|&nbsp; ${res.aimcatId}</p><pre style="background:#f0f4ff;padding:10px;border-radius:6px;font-size:12px">${ss}</pre><p style="font-size:12px">File: <code>${fn}</code><br>Subarea tab: ${cs?'✅':'❌'} &nbsp;Time tab: ${ct?'✅':'❌'}</p><button id="_ac_c" style="padding:6px 18px;background:#1a3a6e;color:#fff;border:none;border-radius:5px;cursor:pointer;margin-right:8px">Copy JSON</button><button onclick="this.closest('div').parentNode.remove()" style="padding:6px 18px;border:1px solid #ccc;border-radius:5px;cursor:pointer">Close</button><pre style="margin-top:12px;font-size:10px;background:#f5f5f5;padding:10px;border-radius:4px;overflow:auto;max-height:180px">${json.slice(0,2000)}</pre></div>`;document.body.appendChild(ov);document.getElementById('_ac_c').onclick=()=>navigator.clipboard.writeText(json).then(()=>alert('✅ Copied!'));})();
