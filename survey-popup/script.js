const popup = document.querySelector('.popup__card');
const popupBtn = document.querySelector('#popupOpen');
const crossBtn = document.querySelector('.popup__cross');

crossBtn.addEventListener('click', hidePopup);
popupBtn.addEventListener('click', showPopup);

function hidePopup() {
	popup.style.display = 'none';
	popupBtn.style.display = 'block';
}

function showPopup() {
	popup.style.display = 'block';
	popupBtn.style.display = 'none';
}
