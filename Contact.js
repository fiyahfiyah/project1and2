// Contact.js;

///////////
// MENU ///
///////////

function myFunction() {
	let x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += 'responsive';
	} else {
		x.className = 'topnav';
	}
}

///////////
// POPUP //
///////////

// define variable form by reference to document ID form
const form = document.getElementById('form');
const popup = document.getElementById('popup');
const closebutton = document.getElementById('closebutton');
// console.log(popup);

// e => is a raw function, same as function
// this function toggles popup on submit button
form.addEventListener('submit', (e) => {
	// this prevents page from refreshing when form submitting
	e.preventDefault();
	console.log(popup);
	// this toggles the popup on/off
	popup.classList.toggle('togglepopup');
});

// this function allows popuptoggle with return button
closebutton.addEventListener('click', (e) => {
	popup.classList.add('togglepopup');
});
