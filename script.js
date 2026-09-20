// Nav scroll effect
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Hide events once their date has passed, so the list stays right between rebuilds
(function () {
  const grid = document.getElementById('eventsGrid');
  const note = document.getElementById('eventsNote');
  if (!grid) return;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let visible = 0;
  grid.querySelectorAll('.event-card').forEach(card => {
    const raw = card.getAttribute('data-date');
    const when = raw ? new Date(raw + 'T23:59:59') : null;
    if (when && !isNaN(when.getTime()) && when < today) {
      card.remove();
    } else {
      visible++;
    }
  });
  if (visible === 0) {
    grid.remove();
    if (note) note.hidden = false;
  }
})();

// Intersection observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Apply to all section headings and cards
document.querySelectorAll('.edi-card, .event-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
