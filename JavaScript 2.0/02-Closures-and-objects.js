// "use strict";

// ====== Почему важно отличать LHS b = от RHS a? ======

// function foo(a){
// 	console.log(a + b); // ReferenceError
// 	b = a;
// }

// foo(2);
// console.log(b()); // TypeError

// ====== Лексическая область видимости ======

// function foo(a) {
//  var b = a * 2;

//  function bar(c) {
//  	console.log( a, b, c );
//  }

//   bar( b * 3 );
//  }

//  foo( 2 ); // 2 4 12

// ====== Искажение лексической области видимости 2 примера! ======

// Function eval
// setInterval
// setTimeout
// with, eval "use strict bilan ishlamidi"

// function foo(str, a){
// 	eval(str);

// 	console.log(b, a); // > 3 1
// }

// foo("var b = 3;", 1);

// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3
// }

// // "более простая" сокращенная запись
// // Objectni svoystvasini tez o'zgartirish uchun ishlatiladi
// with(obj){
// 	a = 2;
// 	b = 3;
// 	c = 4;
// }

// console.log(obj.a); // > 2

// let o1 = {
// 	a: 2
// };

// let o2 = {
//  b: 3
// };

// function foo(obj){
// 	with(obj){
// 		a = 5;
// 	}
// }

// foo(o1); // arugument orqali yuboramiz
// console.log(o1.a); // 5

// foo(o2);
// console.log(o2.a); //undefined

// console.log(a); //  5 — ой, утечка глобального значения!

// ====== Функциональные и блочные области видимости ======

// Немедленный вызов функциональных выражений

// (function muFunction(){
// 	console.log("Hello world");
// })();

// (function myFunctionVersion(){
// 	console.log("Hello Function");
// }())

// ====== Анонимные и именованные функциональные выражения ======
// setTimeout(function myFunction(){
// 	console.log(" 1 secund");
// }, 1000)

/* имя global, чтобы в программе существовало четкое
стилистическое разграничение между глобальными и неглобальными ссылками. Конечно, вы можете передать все что угодно из
внешней области видимости, и параметру можно будет присвоить
любое подходящее имя */
// let param = "Limpus";
// let glabal = " Glabal";

// (function foo(glabal, glabal1){

// 	console.log(glabal + glabal1);

// })(param, glabal);

// ====== Блоки как области видимости ======

// {
// 	// console.log(abc); //ReferenceError: Cannot access 'abc' before initialization
// 	let abc = "Hello";
// 	console.log(abc);
// }

// console.log(abc); // ReferenceError: abc is not defined

// // const

// const ABC = "Limpus";
// ABC = "New"; // TypeError

// ====== Поднятие ======

// a = 2;
// var a;
// console.log( a ); // > 2

// var a; //^ Поднятие
// a = 2;
// console.log( a );

// console.log( a ); // undefined
// var a = 2;

// var a; //^ Поднятие
// console.log( a ); // // undefined
// a = 2;

// Объявления функций поднимаются

// foo(); // Вызов функции

// function foo(){ // Объявления функций
// 	console.log("Hello");
// }

// foo(); // ReferenceError: Cannot access 'foo' before initialization

// let foo = function bar(){ // Объявления функций
// 	console.log("Hello");
// };

// Сначала функции

// Замыкание области видимости

// function foo(){
// 	let a = "Hello";

// 	function fooInner(){
// 		console.log(a);
// 		// fooInner() все еще содержит ссылку на эту область видимости, и эта 
// 		// ссылка называется замыканием.
// 	}

// 	return fooInner;
// }

// let baz = foo();
// baz(); // > Hello

// Теперь я вижу

// function wait(masagge){

// 	setTimeout(function time(){
// 		console.log(masagge);
// 	}, 1000)
// }

// wait("Hello closure!");

// Циклы и замыкания

// for(var i = 1; i <= 5; i++){
// 	(function(j){
// 		setTimeout(function timer(){
// 			console.log(j);
// 		}, j * 1000)
// 	})(i);
// }

// for(let i = 1; i <= 5; i++){
// 	setTimeout(function timer(){
// 		console.log(i);
// 	}, i * 1000)
// }

// Модули

// Этот паттерн JavaScript называется модулем

// function coolMudle(){ //  для создания экземпляра модуля
// 	var something = "Limpus";
// 	var anather = [1, 2, 3];

// 	function doSomething(){
// 		console.log(something);
// 	}

// 	function doAnather(){
// 		console.log(anather.join(" ! "));
// 	}

// 	// вернуть внутреннюю функцию напрямую
// 	// return doAnather;

// 	return{
// 		birinchi: doSomething,
// 		ikkinchi: doAnather
// 	}
// }

// var foo = coolMudle();
// foo.birinchi();
// foo.ikkinchi();

// Ikkinchi variant
// Здесь функция модуля была преобразована в выражение IIFE
// var foo = (function coolMudle(){
// 	var something = "Limpus";
// 	var anather = [1, 2, 3];

// 	function doSomething(){
// 		console.log(something);
// 	}

// 	function doAnather(){
// 		console.log(anather.join(" ! "));
// 	}

// 	// вернуть внутреннюю функцию напрямую
// 	// return doAnather;

// 	return{
// 		birinchi: doSomething,
// 		ikkinchi: doAnather
// 	}
// })();

// foo.birinchi();
// foo.ikkinchi();

/*Модули представляют собой обычные функции, так что они могут
получать параметры:*/

// function myModel(id){
// 	function indintify(){
// 		console.log(id);
// 	}

// 	return{
// 		indintify: indintify
// 	}

// }

// var foo1 = myModel("Hello Model 1");
// var foo2 = myModel("Hello Model 2");

// foo1.indintify();
// foo2.indintify();

// Современные модули

// var foo = (function coolMudle(id){
// 	function change(){
// 		//изменение открытого API
// 		pubicAPI.idintify = idintify2;
// 	}

// 	function idintify1(){
// 		console.log(id);
// 	}

// 	function idintify2(){
// 		console.log(id.toUpperCase());
// 	}

// 	var pubicAPI = {
// 		idintify: idintify1,
// 		change: change
// 	}

// 	return pubicAPI;


// })("MyModel 2020");

// foo.idintify(); // > MyModel 2020
// foo.change(); // > pubicAPI.idintify > idintify2
// foo.idintify(); // > MYMODEL 2020

// Динамическая область видимости

// function foo(){
// 	console.log(a);
// }

// function foo2(){
// 	var abc = 3;
// 	foo();
// }

// var a = 2;

// foo();

// Неявные и явные блоки

// {
// 	let a = 2;
// 	console.log(a);
// }

// console.log(a); // > undenfined

// стрелочные функции

// var foo = (a) => {
// 	console.log(a);

// };

// foo(2);

// var abc = {
// 	id: "Osome",
// 	cool: function (){
// 		console.log(this.id);
// 	}
// }

// abc.cool();

// var id = "Not osome";
// setTimeout(abc.cool, 1000); // this == glabal.id






