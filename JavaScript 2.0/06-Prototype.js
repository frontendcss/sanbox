"use strict"

// Прототипы
// [[Prototype]]
// let obj = {
// 	a: 2
// };

// console.log(obj.b); // agar obj ni ichinda b svostva yo'q bo'lsa [[prototoype]] sepochkasinda qoridi

// let antherObj = {
// 	a: 2,
// 	b: 3
// }

// let myObj = Object.create(antherObj); // myObj ni prototype ni ichina ko'chiradi antherObj ni
// console.log(antherObj);
// console.log(myObj);

// for(let k in myObj){
// 	console.log("From: " + k);
// }

// console.log(("b" in myObj)); // myObj ni ichinna qaridi b ni [[prototype]] orqali

// Назначение и замещение свойств

// let antherObj = {
// 	foo: "Hello"
// };

// let myObject = Object.create(antherObj);
// myObject.foo = "bar";

// let myObject2 = Object.create(myObject);
// myObject2.foo = "World"; // pasgi sepochka

// console.log(myObject2);

// // svoystva foo ni payski eng pasgi sepochkadan boshlanadi yani myObject2 dan
// console.log(myObject2.foo); // > World замещением (shadowing)
// console.log(myObject2.hasOwnProperty("foo")); // > false pasgi sepochka ni ochirib durish garak

// Функции «классов»
// function foo(){
//  // 
// }

// console.log(foo.prototype);

// function Foo(){
// 	//
// }
// // a получает внутреннюю ссылку [[Prototype]] на объект, на который указывает Foo.prototype.
// let a = new Foo();

// // Object.getPrototypeOf(a) paluchit pratotype objecta
// console.log(Object.getPrototypeOf(a) === Foo.prototype); // > true

// «Конструкторы»

// function Foo(){
// 	//
// }

// // .constructor, и это свойство содержит обратную ссылку на функцию
// // (Foo в данном случае)
// console.log(Foo.prototype.constructor === Foo); // true

// let a = new Foo();
// console.log(a.constructor === Foo); // true

// Механика

// function Foo(name){ // this orqali Foo ni prinimat atamiz
// 	this.name = name;
// }

// let a = new Foo("a"); // new Foo function dan object yaratadi
// let b = new Foo("b"); // new Foo function dan object yaratadi

// // function myName ni Foo.prototpype. ni ichina object ni methodi aytib qo'shadi
// Foo.prototype.myName = function(){
// 	return this.name;
// };

// // function myName ni Foo.prototpype. ni ichina object ni methodi aytib qo'shadi
// Foo.prototype.myName2 = function(){
// 	return this.name;
// };

// console.log(Foo.prototype); // function ni [[prototype]]
// console.log(a.__proto__); // object ni [[prototype]]

// console.log(a.myName());
// console.log(b.myName2());

// // canstructor kim akanligini bilanmiz
// console.log(a.constructor);

// И снова о «конструкторе»

// function Foo(){
// 	//
// }

// Foo.prototype = { //  создание нового объекта
// 	// sepochkani buzadi va a1 olmidi Foo ga silkani
// }

// console.log(Foo.prototype);

// let a1 = new Foo();
// console.log(a1.constructor === Foo); // false

// // А у этого объекта имеется свойство .constructor,
// // которое указывает на встроенную функцию Object(..).
// console.log(a1.constructor === Object); // true

// Наследование (на основе прототипов)

// function Foo(name){
// 	this.name = name;
// }

// // Foo.prototype ni ichinda myName method yaratiladi
// Foo.prototype.myName = function(){
// 	return this.name;
// };

// function Bar(name, label){
// 	Foo.call(this, name);
// 	this.label = label;
// }

// Анализ связей «классов»

// function Foo(){
// 	//
// }

// Foo.prototype.bar = function(){
// 	console.log("Hello class");
// };

// let a = new Foo();

// // a ni ichinda prototype bomi yo'qmi shuni tekshiradi
// console.log(a instanceof Foo); // true
// console.log(a.constructor); // true

// // встречается ли во всей цепочке [[Prototype]] объекта a объект Foo.prototype ?
// console.log(Foo.prototype.isPrototypeOf(a)); // true
// console.log(Object.getPrototypeOf(a) === Foo.prototype); // true

// console.log(a.__proto__ === Foo.prototype); // true

// ==============================================================================

// let animal = {
// 	ears: "animal",
// 	// Если у нас есть метод в animal, он может быть вызван на rabbit: *
// 	foo(){
// 		console.log("Hello, __Proto__")
// 	}
// };

// let rabbit = {
// 	jumps: "rabbit",
// 	__proto__: animal
// };

// // Здесь мы можем сказать, что "animal является прототипом rabbit" или 
// // "rabbit прототипно наследует от animal".
// rabbit.__proto__ = animal;

// console.log(rabbit.ears); // animal
// console.log(rabbit.jumps); // rabbit

// rabbit.foo(); // Hello, __Proto__

// Цепочка прототипов может быть длиннее:
// let animal = {
// 	ears: "animal",
// 	// Если у нас есть метод в animal, он может быть вызван на rabbit: *
// 	foo(){
// 		console.log("Hello, __Proto__")
// 	}
// };

// let rabbit = {
// 	jumps: "rabbit",
// 	__proto__: animal
// };


// let longEar = {
// 	earLength: 10,
// 	__proto__: rabbit
// };

// longEar.foo(); // > Hello, __Proto__
// console.log(longEar.ears); // > animal

// В приведённом ниже примере мы присваиваем rabbit собственный метод foo:
// let animal = {
// 	ears: "animal",
// 	foo(){
// 		console.log("Bu Method ishlatilmidi")
// 	}
// };

// let rabbit = {
// 	jumps: "rabbit",
// 	__proto__: animal
// };

// // Agar rabbit ni ichinda Method foo topilmasa rabbit ni prototype ni chindan qidiriladi
// rabbit.foo = function(){
// 	console.log("Hello __Prototype");
// }

// // console.log(rabbit);
// rabbit.foo();

// Связи между объектами

// let obj = {
// 	a: 2,
// 	foo(){
// 		console.log("Hello Object");
// 	}
// };

// // Object.create создает новый объект (bar), связанный с заданным объектом (obj)
// let bar = Object.create(obj);

// bar.foo(); // > Hello Object
// console.log(bar.a); // > 2





























