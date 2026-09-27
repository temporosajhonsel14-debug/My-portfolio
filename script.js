const menuToggleBtn = document.querySelector("#menu-toggle-btn");
const menuIcon = document.querySelector("#menu-icon");
const nav = document.querySelector(".link");
const navLinks = document.querySelectorAll(".link a");

// Toggle navigation dropdown when clicking the menu button
menuToggleBtn.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
});

// Close navigation menu automatically when clicking any link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        nav.classList.remove('active');
    });
});