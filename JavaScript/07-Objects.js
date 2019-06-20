// Определение объектов с помощью объектных литералов

var obj = {
// Свойства: значение,
// Свойства: значение,
// Методы: function,
// Методы: function
}
// Точечная нотация
obj.soart = 10;
obj.limpus = 20;

var line = "family"; // Not Fond
obj.line = 79868;

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


// console.log(navigator["аррVersion"]);


// for(propb in window){
// 	console.log(window[propb]);
// }










