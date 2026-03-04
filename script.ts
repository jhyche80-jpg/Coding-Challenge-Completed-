
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');

function toggleMenu() {
    console.log('button clicked ')
    if (menu.style.display === "none") {
        menu.style.display === "block";
    } else {
        menu.style.display = "none";
    }
}

menuBtn.addEventListener('click', () => { console.log('Button clicked ') });

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted!');
});

window.onscroll = function () {
    if (window.scrollY > 500) {
        document.getElementById('back-to-top').style.display = "block";
    }
};
