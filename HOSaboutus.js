// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
  // Add any interactive features needed
  console.log('About Us page loaded');
});

// Optional: Add parallax effect to header image
window.addEventListener('scroll', function() {
  const headerImg = document.querySelector('.header-img');
  if (headerImg) {
    const scrollPosition = window.scrollY;
    headerImg.style.transform = `translateY(${scrollPosition * 0.1}px)`;
  }
});
