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

// -------- Hero Slideshow --------
(function () {
  // 1) Your slideshow images (add/remove as needed)
  const slides = [
    "images/hero-bg1.jpg",     // your current port image
    "images/hero-bg2.jpg",      // add more images to /images/
    "images/hero-bg3.jpg",
    "images/hero-bg4.jpg",
    "images/hero-bg5.jpg",
    "images/hero-bg6.jpg",
  ];

  // 2) Elements
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const [layerA, layerB] = hero.querySelectorAll(".hero-bg");

  // 3) Preload images
  slides.forEach(src => { const img = new Image(); img.src = src; });

  // 4) Init
  let index = 0;
  let showingA = true;

  // set first two backgrounds
  layerA.style.backgroundImage = `url("${slides[0]}")`;
  layerA.classList.add("is-visible");
  if (slides[1]) layerB.style.backgroundImage = `url("${slides[1]}")`;

  function nextSlide() {
    index = (index + 1) % slides.length;
    const nextSrc = slides[index];

    if (showingA) {
      layerB.style.backgroundImage = `url("${nextSrc}")`;
      layerB.classList.add("is-visible");
      layerA.classList.remove("is-visible");
    } else {
      layerA.style.backgroundImage = `url("${nextSrc}")`;
      layerA.classList.add("is-visible");
      layerB.classList.remove("is-visible");
    }
    showingA = !showingA;
  }

  // 5) Start the slideshow (change every 6s)
  if (slides.length > 1) setInterval(nextSlide, 6000);
})();
