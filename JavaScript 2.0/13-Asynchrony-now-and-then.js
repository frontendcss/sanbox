"use strict"

// Асинхронность: сейчас и потом

// Блочное строение программы

// let data = ajax("http://some.url.1");
// console.log(data);

// ajax("http://some.url.1", function myCallBackFuntion(data){
// 	console.log(data);
// });

// Сейчас:
// function now(){
// 	return 21;
// }

// function later(){
// 	// Потом: faqat function ni ichi keyin ishlidi!
// 	answer = answer * 2;
// 	console.log("Meaning of life:", answer);
// }

// let answer = now();
// setTimeout(later, 1000);

// Асинхронный вывод в консоль
// let a = {
// 	index: 1
// };

// console.log(a);
// a.index++;
// console.log(a);

// // Цикл событий

// let arr = [];
// console.log(arr.length);
// arr.shift();
// console.log(arr.length);

// Параллельные потоки

// var a = 20;
// function foo() {
// a = a + 1;
// }

// function bar() {
// a = a * 2;
// }

// // // ajax(..) - произвольная функция Ajax из библиотеки
// ajax( "https://uzmusichd.net/", foo );
// ajax( "https://uzmusichd.net/", bar );

// Выполнение до завершения

var a = 1;
var b = 2;

function foo() {
	a++;
	b = b * a;
	a = b + 3;
}

function bar() {
	b--;
	a = 8 + b;
	b = a * 2;
}

// ajax(..) - произвольная функция Ajax из библиотеки
// jQuery.ajax( "http://some.url.1", foo );
// jQuery.ajax( "http://some.url.2", bar );






































