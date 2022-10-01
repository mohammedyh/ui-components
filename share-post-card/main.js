const shareLinkInput = document.querySelector('.share-link__input');
const notificationCard = document.querySelector('.notification');

function showNotificationToast() {
	notificationCard.classList.add('notification-show');
	setTimeout(() => notificationCard.classList.remove('notification-show'), 3000);
}

shareLinkInput.addEventListener('click', e => e.target.select());

document.querySelector('.share-link__btn').addEventListener('click', () => {
	navigator.clipboard
		.writeText(shareLinkInput.value)
		.then(showNotificationToast, () =>
			console.error('Copy failed, check browser settings')
		);
});

document.querySelector('.share-icons__row').addEventListener('click', e => {
	if (!e.target.closest('.icon__wrapper')) {
		return;
	}

	document
		.querySelectorAll('.icon__wrapper')
		.forEach(element => element.classList.remove('active'));
	e.target.closest('.icon__wrapper').classList.add('active');
});

shareLinkInput.addEventListener('focus', () => {
	shareLinkInput.addEventListener('keydown', e => {
		if (e.key === 'c' && e.metaKey) {
			showNotificationToast();
		}
	});
});
