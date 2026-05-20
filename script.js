// ── Custom Cursor ──
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX - 10 + 'px';
  cursor.style.top  = e.clientY - 10 + 'px';
});

// ── Fade-up on Scroll ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Active Nav Link on Scroll ──
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  sections.forEach(s => {
    const top = s.offsetTop - 80;
    if (window.scrollY >= top) {
      links.forEach(l => l.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${s.id}"]`);
      if (active) active.style.color = 'var(--accent)';
    }
  });
});