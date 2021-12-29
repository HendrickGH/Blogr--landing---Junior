const contacts = document.querySelectorAll('.box-contact');
const contactsOut = document.querySelectorAll('.box-contact--out');
const contactsOutText = document.querySelectorAll('.contact--out-text');
const textsFooter = [...document.querySelectorAll('.footer-text')];
const toggle = (element, toggle, className) =>
	element.classList[toggle](`${className}-flex`);
contacts.forEach(e => {
	const { nextElementSibling: eOut } = e;
	e.addEventListener('mouseover', toggle.bind(this, eOut, 'add', 'contact'));
	e.addEventListener('mouseout', () => {
		setTimeout(() => {
			toggle(eOut, 'remove', 'contact');
		}, 1000);
	});
});
contactsOut.forEach(e => {
	e.addEventListener('mouseover', toggle.bind(this, e, 'add', 'out'));
	e.addEventListener('mouseout', toggle.bind(this, e, 'remove', 'out'));
});

contactsOutText.forEach(e => {
	e.addEventListener('click', x => {
		const {
			target: { href: value },
		} = x;
		const text = value.slice(value.indexOf('#') + 1);
		const y = textsFooter.findIndex(({ id }) => id === text);
		textsFooter[y].parentElement.classList.add('animation');
	});
});
const btn = document.querySelector('button');
const imgs = document.querySelectorAll(
	'img[src="images/icon-arrow-light.svg"]'
);
btn.addEventListener('click', () => {
	const iconDark = 'images/icon-arrow-dark.svg';
	btn.parentElement.classList.toggle('active');
	imgs.forEach(img => (img.src = iconDark));
});
