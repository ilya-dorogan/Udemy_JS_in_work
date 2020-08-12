"use strict";

/* LESSON 37 ClassList и делегирование событий */

/*
const btns = document.querySelectorAll('.button'),
	wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.length);
console.log(btns[0].classList.item(0));
console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('red'));
console.log(btns[0].classList.add('added'));

if (btns[0].classList.contains('blue')) {
	alert(btns[0].classList.item(1));
}

btns[0].addEventListener('click', () => {
	if (!btns[0].classList.contains('green')) {
		btns[0].classList.add('green');
	} else {
		btns[0].classList.remove('green');
	}

	// btns[0].classList.toggle('orange');
});

//дилигирование
// wrapper.addEventListener('click', (event) => {
// 	if (event.target && event.target.tagName == 'BUTTON') {
// 		console.log('work');
// 	}
// });

wrapper.addEventListener('click', (event) => {
	if (event.target && event.target.matches('button.green')) {
		console.log('work');
	}
});

// btns.forEach(btn => {
// 	btn.addEventListener('click', () => {
// 		console.log('work');
// 	});
// });

const btn = document.createElement('button');
btn.classList.add('red');
btn.classList.add('button');
wrapper.append(btn);
*/