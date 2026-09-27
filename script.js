// Select the menu icon and navigation links container
const menuIcon = document.querySelector('#menu');
const navbar = document.querySelector('.link');

// Toggle navigation menu on menu icon click
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x'); // Changes the icon to an 'X' when menu is open
});

// Close the mobile menu when clicking any nav link
document.querySelectorAll('.link a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});