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

/* LESSON 46 Контекст вызова. This */

// 1)
/*
function showThis(a, b) {
	console.log(this); // undefined

	function sum() {
		console.log(this); // undefined
		return a + b;
	}
	console.log(sum());
}

showThis(3, 2);
*/

// 2)
/*
const obj = {
	a: 5,
	b: 9,
	sum: function () {
		function shuot() {
			console.log(this);
		}
		shuot();
	}
};

obj.sum();
*/

// 3)
/*
function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
}

let max = new User('Max', 2);
*/

// 4)
/*
function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

const user = {
	name: 'Haisenberg'
};

sayName.call(user, ' BB');
sayName.apply(user, [' BB']);

function count(num) {
	return this * num;
}

const double = count.bind(2);

console.log(double(3));
console.log(double(8));
*/

// 1) Обычная фунцкия: this = window, но если "use strict", то undefined.
// 2) Контекст у методов объекта - сам объект.
// 3) this в конструкторах и классах это новый экземпляр объекта.
// 4) Ручная привязка this: call, apply, bind.

/*
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
	//console.log(this);
	this.style.backgroundColor = "red";
});

const obj = {
	num: 2,
	sayNum: function () {
		const say = () => {
			console.log(this.num);
		};

		say();
	}
};

obj.sayNum();

const double = a => a * 2; // если действие в одну строку то можно убрать {} и return

console.log(double(7)); // 14
*/

/* LESSON 47 Классы (ES6) */

// концепция
/*
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height * this.width;
	}
}

class ColoredRectangleWithText extends Rectangle {
	constructor(height, width, text, bgColor) {
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}
	showMyProps() {
		console.log(`Text: ${this.text}, background color: ${this.bgColor}`);
	}
}

const div = new ColoredRectangleWithText(30, 20, 'Hello World!', 'green');

div.showMyProps();
console.log(div.calcArea());
*/

// экземпляры
/*
const square = new Rectangle(7, 4);
const aw = new Rectangle(5, 5);

console.log(square.calcArea());
console.log(aw.calcArea());
*/

/* LESSON 49 Rest оператор и параметры по умолчанию (ES6) */

/*
const log = function (a, b, ...rest) {
	console.log(a, b, rest);
}

log('100', '100', 'arr', 'arr', 'arr');

function calcOrDouble(number, basis = 2) { //basis по умолчанию
	console.log(number * basis);
}

calcOrDouble(6);
*/