// 'use strict'
// Определение объектов с помощью объектных литералов

var obj = {
// Свойства: значение,
// Свойства: значение,
// Методы: function,
// Методы: function
}
// Точечная нотация
var test = "Test";
obj.soart = 10;
obj.limpus = 20;
obj.line = 79868;
obj.test = "String Test";

console.log(obj);

// Скобочная нотация
var obj1 = {}
var ComPus = "name"
obj1[ComPus] = 2324;

console.log(obj1);

// Удаление свойства
delete obj.limpus;
console.log(obj);


//Работа с методами
var methot = {
	soart: "Hello",
	comusp: function(param){
		console.log(this.soart, param);
	}
}

methot.comusp("Limpus");

// Определение объектов с помощью конструктора Object ()
var obj2 = new Object();
obj2.age = "Soart";
console.log(obj2);


// Создание объектов с помощью конструкторов (объектный тип Person) функции-конструктор
function Person(){
	this.eyes = 2;
	this.ears = 2;
	this.arms = 2;
	this.hands = 2;
	this.feet = 2;
	this.legs = 2;
	this.species = "Homo sapiens";
}

// У вас есть объектный тип Person , который служит прототипом для нескольких объектов
var willieNelson = new Person();
console.log(willieNelson);
delete willieNelson.species;
console.log(willieNelson);

// Видоизменение объектного типа
var patsyCline = new Person();

Person.prototype.MyName = "Limpus";
Person.prototype.MyAge = "26";

console.log(patsyCline.MyName);

// Создание объектов с помощью метода Object.create ()

var Person = {
	eyes: 2,
	arms: 2,
	feet: 2
}

// создать объект willieNelson на основе Person 
var willieNelson = Object.create(Person);
// проверка наличия унаследованных свойств 
console.log(willieNelson.feet); // выводит 2

var f = function factarial(name){
	// factarial = soart;
	// alert( factarial );
}

f();

// Объекты как ассоциативные массивы
var objAsses = {}
objAsses.name = "Soart";
objAsses.age = "26";
delete objAsses.age;

console.log(objAsses);

if("name" in objAsses){
	console.log("svoystva age bo");
}else {
	console.log("svoystva age yo'q");
}

if(objAsses.soart === undefined){
	objAsses.soart = "Limpus";
}else{
	console.log("qo'shilmadi");
}

console.log(objAsses);

// Доступ через квадратные скобки

objAsses["my family"] = "Artikov";
console.log(objAsses);

// Доступ к свойству через переменную
var key = "name";
console.log(objAsses[key]);

// В качестве значения можно тут же указать и другой объект

var objAsses2 = {
	name: "site",
	browser: {
		google: "chrome"
	}
}
console.log(objAsses2.browser.google);

console.log("---");

// Объекты: перебор свойств
var objPer = {
	name: "Soart",
	age: 26,
	browser: "Safari"
}

for(var key in objPer){
	console.log("key: " + key + "\nvalue: " + objPer[key] );
}

// Количество свойств в объекте
var counter = 0;
for(var key in objPer){
	counter++;
}

console.log(counter);
console.log("---");

// В каком порядке перебираются свойства?
var objSort = {
	"+9": "Uzbekiston",
	"+7": "Russia",
	"+1": "America"
}

for(var key in objSort){
	console.log("Code: " + key + "\ncountry " + objSort[key]);
}

console.log("---");

var varible = "Sarvar";
var myName = varible;
console.log(myName, varible);

// Объекты: передача по ссылке
// При копировании её, получается что мы сделали копию ключа, но сейф по-прежнему один.

var objLink = {
	name: "Soart",
	age: 26,
	browser: "Google"
}

var objLinkCopy = objLink;
console.log(objLinkCopy);

objLink.name = "Limpus";
console.log(objLinkCopy);

console.log("---");

// Клонирование объектов
var objOrginal = {
	name: "Sarvar",
	family: "Artikov",
	age: 26
}
console.log(objOrginal);

var clone = {}

for(var key in objOrginal){
	clone[key] = objOrginal[key];
}

clone.name = "Limpus";
clone.age = 27;
console.log(clone);

console.log("\nГлобальный объект");

/* 
В JavaScript все глобальные переменные и функции являются свойствами специального объекта,
который называется «глобальный объект» (global object) window.
*/

var varGlobal = "glabal Variable";
console.log(window.varGlobal);

console.log("a" in window);
console.log(window.a);
var a = "Variable";
console.log(window.a);

console.log(" ");

console.log(testVariableD() in window);
function testVariableD(){};

console.log(testVariableE in window);
var testVariableE = function(){
	console.log("Hi");
};

console.log(" ");
// Присвоение переменной без объявления

// console.log(x);
x = 4;
console.log(x);

console.log(" ");

// Возврат функции
function makeCounter(){
	// LexicalEnvironment = { currentCount: undefined }
	var currentConter = 1;
	// При запуске функция создает объект
	// LexicalEnvironment = { currentCount: 1 }
	return function(){
		return currentConter++;
		// [[Scope]] свойство
	};
}

// var counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

console.log(" ");

var counter2 = makeCounter();
console.log(counter2());
console.log(" ");

// Свойства функции
function makeCounter(){
	function counter(){
		return counter.currentConter2++;
	};
	counter.currentConter2 = 1;
	return counter;
}
var counter2 = makeCounter();
console.log(counter2());
counter2.currentConter2 = 5;
console.log(counter2());
console.log(counter2());






















