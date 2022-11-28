const list = document.querySelector('.list');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
	list.append(list.firstElementChild);

	prev.classList.add('on');
	setTimeout(() => prev.classList.remove('on'), 500);
});

next.addEventListener('click', () => {
	list.prepend(list.lastElementChild);

	next.classList.add('on');
	setTimeout(() => next.classList.remove('on'), 500);
});
