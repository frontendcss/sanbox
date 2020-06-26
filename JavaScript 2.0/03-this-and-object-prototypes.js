// "use strict"

// Примеры методов
// let user = {
// 	name: "Limpus",
// 	age: 27
// };

// // называют методом объектa user
// user.foo = function(){
// 	console.log("Hello, This");
// }

// user.foo(); // > Hello, This

// Существует более короткий синтаксис для методов в литерале объекта:

// let user = {
// 	name: "Limpus",
// 	foo: function(){
// 		console.log("Hello, This")
// 	}
// }
// // Сокращённая запись метода

// let user2 = {
// 	name: "Limpus",
// 	foo(){
// 		console.log("Hello, This 2")
// 	}
// }

// user2.foo();

// Ключевое слово «this» в методах
// let obj = {
// 	name: "Limpus",
// 	age: 27,
// 	foo(){
// 		console.log(this.name);
// 	}
// };
//  значением this будет являться user (ссылка на объект user).
// obj.foo();

// Технически также возможно получить доступ к объекту без ключевого слова this
// Но такой код будет ненадёжным

// let objCopy = obj;// скопировать ссылку на объект obj в objCopy
// obj = null; // перезапишем переменную obj
// objCopy.foo(); // undifined

// «this» не является фиксированным
// let user = {
// 	name: "Soart"
// };

// function foo(){
// 	console.log(this.name); 
// }

// user.fooMethod = foo; // user ni ichina fooMethod ni qo'shamiz
// user.fooMethod(); // this == user

// // неважен способ доступа к методу - через точку или квадратные скобки
// user["fooMethod"]();

// Последствия свободного this

// let obj = {
// 	name: "Limpus",
// 	foo(){console.log(this.name);},
// 	foo2(){console.log("Foo 2");}
// };

// (obj.name === "Limpus" ? obj.foo: obj.foo2)(); // Erorr
// // Затем метод тут же вызывается с помощью скобок ()

// this и прототипы объектов

// function identify(){
// 	return this.name.toUpperCase();
// }

// function speak(){
// 	// obj you ni argymen atib yuboramaniz indentify ga
// 	var greeting = "Hello, I'm " + identify.call(this);
// 	console.log(greeting);
// }

// var you = {
// 	name: "Kale"
// }

// var me = {
// 	name: "Rader"
// }

// console.log(identify.call(you)); // > KALE
// console.log(identify.call(me)); // > RADER

// speak.call(you); // > Hello, I'm KALE
// speak.call(me); // > Hello, I'm RADER

// this обретает смысл!
// this Связывание по умолчанию

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
// 	foo(); // foo dapaga ko'tariladi a dan!
// })(); // TypeError:

// Неявное связывание 1 праритет

// function foo(){
// 	console.log(this.a);
// }

// function foo2(){
// 	console.log(this.b);
// }

// let obj = {
// 	b: "Hello, 'this'",
// 	a: 2,
// 	fooCall: foo, // function foo ni kantexti obj
// 	fooCall2: foo2 // function foo2 ni kantexti obj
// }

// obj.fooCall(); // > 2
// obj.fooCall2(); // > Hello, 'this'

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
// 	objinner2: obj2
// }

// obj1.objinner2.fooCall(); // > 2

// Неявная потеря this
// "use strict bilan ishlamidi"

// function foo(){
// 	console.log(this.a);
// }

// var obj = {
// 	a: "Limpus",
// 	linkFoo: foo
// };

// obj.linkFoo(); // > Limpus

// var copyLink = obj.linkFoo;
// var a = "Soart"; // Типерь a также является свойством глобального объекта
// copyLink(); // kantext glabal bo'ldi va oshibka baradi browser agar "use strict" rejim bo'lsa

// ======================

// function foo(){
// 	console.log(this.a);
// }

// var obj = {
// 	a: 2,
// 	callFoo: foo
// };

// function toFunc(fn){
// 	fn();
// }

// var a = "Ops Glabal";

// // toFunc(obj.callFoo); // > Ops Glabal
// setTimeout(obj.callFoo, 1000); // > Ops Glabal

// Явное связывание 2 праритет
// new и call/apply не могут использоваться вместе

// function foo(){
// 	console.log(this.a);
// 	console.log(this.b);
// }

// let obj = {
// 	a: 2,
// 	b: 3
// }

// foo.apply(obj); // > 2, 3
// // foo.call("Birinchi this"); // undefined

// Жесткое связывание
// new никак не может переопределить жесткое связывание

// function foo(){
// 	console.log(this.a);
// }

// let obj = {
// 	a: 2
// };

// let bar = function(){
// 	foo.call(obj);
// }

// let a = "Ops Glabal";

// bar();
// setTimeout(bar, 1000);

// ======================

// function foo(smothing,limpus){
// 	console.log(this.a, smothing, limpus);
// 	return this.a + smothing + limpus;
// }

// let obj = {
// 	a: 2
// };

// let func = function(){
// 	return foo.apply(obj, arguments);
// }

// let b = func(3,5); // 2 3 5
// console.log(b); // 10

// function foo(smothing, limpus){
// 	console.log(this.a, smothing, limpus);
// 	return this.a + smothing + limpus;
// }

// let obj = {
// 	a: 2
// };

// let bar = foo.bind(obj); // 1 chi orgumemt bilan this ga obj ni yuboramiz
// let b = bar(3,5); // 2 3 argument bilan 3,5 ni yuboramiz
// console.log(b);

// Связывание new
// new и call/apply не могут использоваться вместе

// function foo(a){
// 	this.a = a; // bar.a = 2
// }

// let bar = new foo(2); // new object yaratadi let bar = {a: 2};
// console.log(bar);

// Исключения связывания
// "use stritct bilan ishlamidi"
// function foo(){
// 	console.log(this.a);
// }

// var a = 2;
// foo.call(undefined); // null

// Лексическое поведение this стрелочные функция
// Но в ES6 появилась особая разновидность функций
// которая не использует эти правила.
// function foo(){
// 	return () => {
// 		console.log(this.a);
// 	}
// }

// let obj1 = {
// 	a: "Limpus"
// };

// let obj2 = {
// 	b: "Soart"
// };

// let bar = foo.call(obj1);
// bar(); // > Limpus

// У стрелочных функций нет «this»

// let obj = {
// 	firstName: "Limpus",
// 	foo(){
// 		return () => {
// 			console.log(this.firstName);
// 		}
// 	}
// };
// let firstName = "Limpus Glabal";
// obj.foo(); // > Limpus







