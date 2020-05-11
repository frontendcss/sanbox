// "use strict"

// this и прототипы объектов

// function identify(){
// 	return this.name.toUpperCase();
// }

// function speak(){
// 	var greeting = "Hello, I'm " + identify.call( this );
// 	console.log(greeting);
// }

// var you = {
// 	name: "Kale"
// }

// var me = {
// 	name: "Rader"
// }

// console.log(identify.call(you));
// console.log(identify.call(me));

// speak.call(you);
// speak.call(me);

// this обретает смысл!


// Связывание по умолчанию

// function foo(){
// 	"use strict"
// 	console.log(this.a); // this ni o'rnina undefined bo'ladi
// }

// var a = 2;
// foo(); // TypeError: Cannot read property 'a' of undefined

// function foo(){
// 	console.log(this.a);
// }

// (function foo1(){
// 	let a = 2;
// 	foo();
// })();

// Неявное связывание

// function foo(){
// 	console.log(this.a);
// }

// function foo2(){
// 	console.log(this.b);
// }

// let obj = {
// 	b: "Hello, 'this'",
// 	a: 2,
// 	fooCall: foo,
// 	fooCall2: foo2
// }

// obj.fooCall();
// obj.fooCall2();

// Для места вызова важен только верхний/последний уровень цепочки
// ссылок на свойства объекта. Пример:
// function foo(){
// 	console.log(this.a);
// }

// let obj2 = {
// 	a: 2,
// 	fooCall: foo
// }

// let obj1 = {
// 	a: 200,
// 	obj2: obj2
// }


// obj1.obj2.fooCall();

// Неявная потеря this
// "use strict bilan ishlamidi"
// function foo(){
// 	console.log(this.a);
// }

// var obj = {
// 	a: "Limpus",
// 	linkFoo: foo
// };

// obj.linkFoo();

// var copyLink = obj.linkFoo;
// var a = "Soart";// Типерь a также является свойством глобального объекта
// copyLink();


function foo(){
	console.log(this.a);
}

var obj = {
	a: 2,
	callFoo: foo
};

function toFunc(fn){
	fn();
}

var a = "Ops Glabal";

// toFunc(obj.callFoo);
setTimeout(obj.callFoo, 1000);




















