const menu = document.querySelector("#menu");
const nav = document.querySelector(".link");
const navLinks = document.querySelectorAll(".link a");

// Toggle navigation dropdown on menu icon click
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

// Close navigation menu when clicking a navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        nav.classList.remove('active');
    });
});