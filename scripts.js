const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const contact = document.getElementById('contact-form')
const emailError = document.getElementById('emailError')
const submitBtn = document.getElementById
document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById('menu');
	const menuBtn = document.getElementById('menu-btn');

	function toggleMenu() {
		console.log('button clicked ')

		menu.classList.toggle('visible')
	}

	menuBtn.addEventListener('click', toggleMenu);
});

contact.addEventListener('submit', function (event) {
	event.preventDefault();
	const name = inputName.value
	const email = inputEmail.value
	alert('Form submitted!');



});

window.onscroll = function () {
	if (window.scrollY < 500) {
		document.getElementById('back-to-top').style.display = "none";
	} else {
		document.getElementById('back-to-top').style.display = "block";
	}


};
