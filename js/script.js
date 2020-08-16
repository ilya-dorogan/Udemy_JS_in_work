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

/* LESSON 39 Скрипты и время их выполнения. setTimeout и setInterval */

/*
const timerId1 = setTimeout(function () {
	console.log('1!');
}, 1000);

const timerI2 = setTimeout(function () {
	console.log('2!');
}, 2000);

const timerId3 = setTimeout(function () {
	console.log('3!');
}, 3000);
*/

/*
const timerID = setTimeout(function (text) {
	console.log(text);
}, 2000, 'Show this text');
*/

/*
const btn = document.querySelector('.button');
let timerID,
	i = 0;

function logger() {
	if (i === 3) {
		clearInterval(timerID);
	}
	console.log('text');
	i++;
}

btn.addEventListener('click', () => {
	// const timerID = setTimeout(logger, 2000);
	timerID = setInterval(logger, 2000);

});
*/

// const timerID = setTimeout(logger, 2000, 'Show this text');

/*
let id = setTimeout(function log() {
	console.log('Work');
	id = setTimeout(log, 500);
}, 500); //рекурсивынй вызов
*/

/*
const btn = document.querySelector('.btn');
let timerId,
	i = 0;

function myAnim() {
	const elem = document.querySelector('.box');
	let pos = 0;

	const id = setInterval(frame, 10);

	function frame() {
		if (pos == 300) {
			clearInterval();
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', myAnim);
*/

/* LESSON 40 Работа с датами */

// const now = new Date(2020, 7, 14, 20);
/*
const now = new Date();

console.log(now.setHours(18)); // set установка значения
console.log(now);
*/

/*
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours()); //UTC

console.log(now.getTimezoneOffset()); //разница от UTC в минутах
console.log(now.getTime()); //прошедшее время в мс
*/

/*
let start = new Date();

for (let i = 0; i < 1000000; i++) {
	let some = i ** 3;
}

let end = new Date();

alert(`Cycle end time ${end - start} ms`);
*/

/* LESSON 45 Функции-конструкторы */

/*
function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function () {
		console.log(`Hello ${this.name}`);
	}
}

User.prototype.exit = function (name) {
	console.log(`User ${this.name} is gone.`);
}

const john = new User('John', 1);
const max = new User('Max', 2);

john.hello();
max.hello();

john.exit();

console.log(john);
console.log(max);

*/