const revealTargets = document.querySelectorAll('.feature-card, .workflow > div, .local-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(18px)';
  element.style.transition = 'opacity .55s ease, transform .55s ease, border-color .25s ease';
  observer.observe(element);
});

const style = document.createElement('style');
style.textContent = '.is-visible{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);
