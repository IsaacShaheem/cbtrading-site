// Show elements when they scroll into view
const animatedElements = document.querySelectorAll('.animated');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Animate once
    }
  });
}, {
  threshold: 0.1
});

animatedElements.forEach(el => {
  observer.observe(el);
});
