// Menu Toggle for Mobile Navigation
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

// Event listener for menu toggle click
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Close the mobile menu when a link is clicked
navList.querySelectorAll('li a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
    navList.classList.remove('active');
  }
});

// Add smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
