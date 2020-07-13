const setRangeBackground = target => {
	const min = target.min || 0;
	const max = target.max || 100;

	const percent = (max - min) / 100;
	const value = (target.value - min) / percent;

	target.style.background = `linear-gradient(to right, #e50469 ${value}%, #e5e8ed ${value}%)`;
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
