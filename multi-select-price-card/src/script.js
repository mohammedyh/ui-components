const subscribeBtn = document.querySelector('button[data-subscribe]');
const priceOptions = document.querySelector('[data-price-options]');
const cardPrice = document.querySelector('[data-card-price]');

priceOptions.addEventListener('click', handlePriceChange);
subscribeBtn.addEventListener('click', handleSubscribe, { once: true });

function handlePriceChange(e) {
	if (!e.target.dataset.option) return;

	document
		.querySelector('.bg-accent')
		.classList.remove('border-accent', 'bg-accent', 'text-white');

	e.target.classList.add('border-accent', 'bg-accent', 'text-white');
	cardPrice.textContent = e.target.dataset.option;
}

function handleSubscribe() {
	const spinner = this.querySelector('[data-spinner]');
	const buttonText = this.querySelector('span');

	spinner.classList.remove('hidden');
	buttonText.classList.add('hidden');
	setTimeout(() => {
		spinner.classList.add('hidden');
		buttonText.classList.remove('hidden');
		buttonText.textContent = 'Thank you for subscribing!';
	}, 2000);
}
