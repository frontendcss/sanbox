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
// myObject2.foo = "World";

// console.log(myObject2);

// // svoystva foo ni payski eng pasgi sepochkadan boshlanadi yani myObject2 dan
// console.log(myObject2.foo); // > Hello замещением (shadowing)
// console.log(myObject2.hasOwnProperty("foo")); // false myObject2.foo ni ochirib durish garak

// Функции «классов»
// function foo(){
//  // 
// }

// console.log(foo.prototype);

// function Foo(){
// 	//
// }

// let a = new Foo(); // a получает внутреннюю ссылку [[Prototype]] на объект, на который указывает Foo.prototype.

// // Object.getPrototypeOf(a) paluchit pratotype objecta
// console.log(Object.getPrototypeOf(a) === Foo.prototype);

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

// Foo.prototype.myName = function(){ // function myName ni Foo.prototpype. ni ichina object ni methodi aytib qo'shadi
// 	return this.name;
// };

// Foo.prototype.myName2 = function(){ // function myName ni Foo.prototpype. ni ichina object ni methodi aytib qo'shadi
// 	return this.name;
// };

// console.log(Foo.prototype); // function ni [[prototype]]
// console.log(a.__proto__); // object ni [[prototype]]

// console.log(a.myName());
// console.log(b.myName2());

// И снова о «конструкторе»

// function Foo(){
// 	//
// }

// Foo.prototype = { //  создание нового объекта
// 	// sepochkani buzadi va a1 olmidi Foo ga silkani
// }

// // console.log(Foo.prototype);

// let a1 = new Foo();
// console.log(a1.constructor === Foo); // falfe

// // А у этого объекта имеется свойство .constructor,
// // которое указывает на встроенную функцию Object(..).
// console.log(a1.constructor === Object);


// Наследование (на основе прототипов)

// function Foo(name){
// 	this.name = name;
// }

// Foo.prototype.myName = function(){ // Foo.prototype ni ichinda myName object yaratiladi
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

// // a ni ichnda prototype bomi yo'qmi shini tekshiradi
// console.log(a instanceof Foo); // true
// // встречается ли во всей цепочке [[Prototype]] объекта a объект Foo.prototype ?
// console.log(Foo.prototype.isPrototypeOf(a)); // true
// console.log(Object.getPrototypeOf(a) === Foo.prototype); // true

// console.log(a.__proto__ === Foo.prototype); // true

// ==============================================================================

// // здесь мы создаем новый объект `Bar.prototype`, связанный с `Foo.prototype`
// Bar.prototype = Object.create(Foo.prototype);

// Bar.prototype.myLabel = function(){
// 	return this.label;
// };

// let a = new Bar("myName", "myLabel");

// console.log(a.myName());
// console.log(a.myLabel());

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

// Здесь мы можем сказать, что "animal является прототипом rabbit" или 
// "rabbit прототипно наследует от animal".
// rabbit.__proto__ = animal;

// console.log(rabbit.ears); // animal
// console.log(rabbit.jumps); // rabbit

// rabbit.foo(); // **

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

// longEar.foo(); // **
// console.log(longEar.ears); > animal

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

// rabbit.foo = function(){
// 	console.log("Hello __Prototype");
// }

// // console.log(rabbit);
// rabbit.foo();
// Agar rabbit ni ichinda Method foo topilmasa rabbit ni prototype ni chindan qidiriladi

// Связи между объектами

// let obj = {
// 	a: 2,
// 	foo(){
// 		console.log("Hello Objct");
// 	}
// };

// // Object.create создает новый объект (bar), связанный с заданным объектом (obj)
// let bar = Object.create(obj);

// bar.foo();
// console.log(bar.a);





























