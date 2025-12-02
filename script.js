// Welcome log
console.log("👋 Welcome to Urvi Mamidala's portfolio.");

// Typing animation text options
const texts = ["AI/ML Engineer", "Developer", "Problem Solver"];
let tCount = 0, tIndex = 0, current = "", letter = "";

(function type() {
  if (tCount === texts.length) tCount = 0;
  current = texts[tCount];
  letter = current.slice(0, ++tIndex);

  const typedEl = document.querySelector(".typed-text");
  if (typedEl) typedEl.textContent = letter;

  if (letter.length === current.length) {
    setTimeout(() => { tIndex = 0; tCount++; setTimeout(type, 700); }, 1600);
  } else {
    setTimeout(type, 90);
  }
})();

// Smooth scroll + reveal animation
document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ top, behavior: 'smooth' });

        // Auto-collapse mobile navbar
        const bsCollapse = document.querySelector('.navbar-collapse.show');
        if (bsCollapse) new bootstrap.Collapse(bsCollapse, { toggle: true });
      }
    });
  });

  // Reveal on scroll
  const revealElems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.12 });

  revealElems.forEach(el => revealObserver.observe(el));

  // Reduce-motion accessibility
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(sec => sec.classList.add('active'));
  }
});
