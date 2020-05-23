"use strict"

// Прототипы
// [[Prototype]]

// let antherObj = {
// 	a: 2,
// 	b: 3
// }

// let myObj = Object.create(antherObj);
// console.log(antherObj);
// console.log(myObj);

// for(let k in myObj){
// 	console.log("From: " + k);
// }

// console.log(("b" in myObj));

// Назначение и замещение свойств

// let antherObj = {
// 	foo: "Hello"
// };

// let myObject = Object.create(antherObj);
// myObject.foo = "bar"; // замещением (shadowing)
// console.log(myObject);

// Функции «классов»

// function foo(){
//  // 
// }

// console.log(foo.prototype);

// function foo(){
// 	//
// }

// let a = new foo(); // он получает внутреннюю ссылку [[Prototype]] на объект, на который указывает Foo.prototype.

// console.log(Object.getPrototypeOf(a) === foo.prototype);

// «Конструкторы»

// function Foo(){
// 	//
// }

// // .constructor, и это свойство содержит обратную ссылку на функцию
// // (Foo в данном случае)
// console.log(Foo.prototype.constructor === Foo);

// let a = new Foo();
// console.log(a.constructor === Foo);


































