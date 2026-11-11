document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const links = [...document.querySelectorAll('.nav-links a')];
const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
window.addEventListener('scroll', () => {
  const current = sections.reduce((active, section) => window.scrollY >= section.offsetTop - 180 ? section : active, null);
  links.forEach((link) => link.style.color = current && link.getAttribute('href') === `#${current.id}` ? '#72e4f3' : '');
}, { passive: true });
