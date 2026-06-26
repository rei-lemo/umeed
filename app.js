const menuButton = document.querySelector('.menu-toggle');
const mainLinks = document.querySelector('.main-links');

menuButton?.addEventListener('click', () => {
  const isOpen = mainLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('in'));
}
