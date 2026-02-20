// DOMElement
const cur = document.getElementById('cursor');
const cursorRingEl = document.getElementById('cursorRing');
const navEl = document.getElementById('nav');
const pageMainEl = document.getElementById('page-main');
const pageProjectEl = document.getElementById('page-project');

/* ── MOBILE VH FIX ── */
function setVH() { document.documentElement.style.setProperty('--vh', window.innerHeight * .01 + 'px'); }
setVH();
window.addEventListener('resize', setVH);

/* ── HAMBURGER ── */
function toggleDrawer() {
    const h = document.getElementById('hamburger');
    const d = document.getElementById('navDrawer');
    h.classList.toggle('open');
    d.classList.toggle('open');
    document.body.style.overflow = d.classList.contains('open') ? 'hidden' : '';
}
function closeDrawer() {
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('navDrawer').classList.remove('open');
    document.body.style.overflow = '';
}

/* ── CURSOR ── */

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function animateCursor() {
    // Move core cursor instantly
    cur.style.left = `${mx}px`;
    cur.style.top = `${my}px`;

    // Ease the ring
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursorRingEl.style.left = `${rx}px`;
    cursorRingEl.style.top = `${ry}px`;

    requestAnimationFrame(animateCursor);
}
animateCursor();

/* ── NAV ── */

window.addEventListener('scroll', () => {
    navEl.classList.toggle('scrolled', scrollY > 60);
});

/* ── REVEAL ── */
function initReveal() {
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                io.unobserve(e.target);
            }
        });
    }, { threshold: .1 }
    );
    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible');
        io.observe(el);
    });
}
initReveal();

/* ── PAGE SWITCH ── */
let nextProjectId = null;

function showMain(e, anchor) {
    if (e) e.preventDefault();

    pageProjectEl.classList.remove('active');
    setTimeout(() => {
        pageProjectEl.style.display = 'none';
        pageMainEl.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'instant' });
        if (anchor) {
            setTimeout(() => {
                const el = document.getElementById(anchor);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 60);
        }
        initReveal();
    }, 300);
}

/* ── PLACEHOLDER HELPER ── */
function ph(label) {
    return `<div class="detail-view-placeholder">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>
    <span>${label}</span><small>Add your screenshot here</small>
  </div>`;
}

/* ── PROJECT DATA ── */

function openProject(id) {
    const p = PROJECTS[id];
    if (!p) return;

    nextProjectId = p.next;

    // --- 1. HERO SECTION ---
    document.getElementById('d-category').textContent = p.category;
    document.getElementById('d-title').textContent = p.title;
    document.getElementById('d-year').textContent = p.year;
    document.getElementById('d-type').textContent = p.type;
    document.getElementById('d-role').textContent = p.role;
    document.getElementById('d-status').textContent = p.status;

    // --- 2. SCREENSHOTS ---
    document.getElementById('d-screenshots').innerHTML = `
    <div class="detail-view-main">
      ${ph(p.screenshots[0] || 'Main View')}
      <div class="view-label">${p.screenshots[0] || 'Main View'}</div>
    </div>
    <div class="detail-view-thumb">${ph(p.screenshots[1] || 'Screen 2')}</div>
    <div class="detail-view-thumb">${ph(p.screenshots[2] || 'Screen 3')}</div>
  `;

    // --- 3. ABOUT SECTION (Safely rendering text arrays) ---
    document.getElementById('d-about-title').textContent = p.aboutTitle;

    // Map through the array of paragraphs and wrap them in <p> tags
    const bodyHTML = p.aboutBody.map(text => `<p class="detail-p">${text}</p>`).join('');
    document.getElementById('d-about-body').innerHTML = bodyHTML;

    // Render Stats
    document.getElementById('d-stats').innerHTML = p.stats.map(s => `
    <div class="detail-stat">
      <div class="ds-num">${s.num}</div>
      <div class="ds-label">${s.label}</div>
    </div>
  `).join('');

    // --- 4. TECH STACK ---
    document.getElementById('d-stack').innerHTML = p.stack.map(s => `
    <div class="stack-item">
      <div class="stack-icon">${s.icon}</div>
      <div class="stack-name">${s.name}</div>
      <div class="stack-role">${s.role}</div>
    </div>
  `).join('');

    // --- 5. FEATURES ---
    document.getElementById('d-features').innerHTML = p.features.map((f, i) => `
    <div class="feature-item">
      <div class="feature-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="feature-content">
        <div class="feature-title">${f.title}</div>
        <div class="feature-desc">${f.desc}</div>
      </div>
    </div>
  `).join('');

    // --- 6. DEMO SECTION ---
    document.getElementById('d-demo-url').textContent = p.demo.url;

    document.getElementById('d-demo-body').innerHTML = p.demo.hasDemo
        ? `<iframe src="${p.demo.liveLink}" class="demo-iframe" loading="lazy"></iframe>`
        : `<div class="demo-placeholder">
         <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
         <p>Add your live demo URL to the project data to embed it here.</p>
       </div>`;

    document.getElementById('d-demo-links').innerHTML = `
    <a href="${p.demo.liveLink}" target="_blank" class="demo-link">↗ Live Demo</a>
    <a href="${p.demo.githubLink}" target="_blank" class="demo-link-ghost">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      View Source
    </a>
  `;

    // --- 7. NEXT PROJECT BUTTON ---
    document.getElementById('d-next-title').textContent = PROJECTS[p.next]?.title || '—';

    // --- 8. SHOW DETAIL PAGE ---
    pageMainEl.classList.remove('active');
    pageProjectEl.style.display = 'block';

    window.scrollTo({ top: 0, behavior: 'instant' });

    // Use requestAnimationFrame to ensure the display change registers before fading in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            pageProjectEl.classList.add('active');
        });
    });
}