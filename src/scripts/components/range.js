const setRangeBackground = target => {
	const min = target.min;
	const max = target.max;

	const percent = (max - min) * 0.01;
	const value = (target.value - min) / percent;

	$(target).css(
		'background',
		`linear-gradient(to right, #e50469 ${value}%, #e5e8ed ${value}%)`,
	);

	console.log(target.value, value);
};

document.body.addEventListener('input', e => {
	const target = e.target.closest('[type="range"]');
	if (target) {
		setRangeBackground(target);
	}
});

document.addEventListener('DOMContentLoaded', () => {
	document
		.querySelectorAll('[type="range"]')
		.forEach(elem => setRangeBackground(elem));
});
