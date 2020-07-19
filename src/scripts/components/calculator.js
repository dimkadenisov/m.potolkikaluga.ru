const prices = {
	'5': 2980,
	'6': 3400,
	'7': 3820,
	'8': 4240,
	'9': 4440,
	'10': 4860,
	'11': 5060,
	'12': 5480,
	'13': 5790,
	'14': 5790,
	'15': 5790,
	'16': 5790,
	'17': 5790,
	'18': 5790,
	'19': 7650,
	'20': 7960,
	'21': 8270,
	'22': 8470,
	'23': 8780,
	'24': 9200,
	'25': 9400,
};

document.body.addEventListener('input', e => {
	const target = e.target.closest('.calculator-range [type="range"]');
	if (target) {
		target
			.closest('.calculator__content')
			.querySelector('.calculator-input-label__summary').innerText = `${
			prices[target.value]
		} руб.`;
		target
			.closest('.calculator__content')
			.querySelector('.calculator-input-label__input').value = target.value;
	}
});

document.body.addEventListener('submit', e => {
	const target = e.target.closest('.calculator__content');

	if (target) {
		e.preventDefault();
		const value = target.querySelector('.calculator-input-label__input').value;
		target.querySelector(
			'.calculator-input-label__summary',
		).innerText = `${prices[value]} руб.`;
		target.querySelector('[type="range"]').value = value;
		setRangeBackground(target.querySelector('[type="range"]'));
	}
});
