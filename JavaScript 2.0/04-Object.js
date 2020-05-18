"use strict"
// Объекты
// Литеральный синтаксис объекта

// let myObj = {
// 	key: value,
// 	key1: value
// }

// Сконструированная форма выглядит так

// let myObj1 = new Object();
// myObj1.key = "value";
// console.log(myObj1.key);

// Встроенные объекты
// let abc = "I,am String";
// console.log(typeof abc); // String

// let abcObj = new String("I, am String Object");
// console.log(typeof abcObj); // Object

// язык автоматически преобразует строковый примитив в объект String
// let abc = "I,am String";
// console.log(typeof abc);

// let obj = {
// 	123: "Hello Num", // key string tipa aylanadi
// 	key: "Hello",
// 	"key 000 key": "Hello Object"
// };

// let key = "key 000 key";

// console.log(obj.key); // Hello
// // console.log(obj["key 000 key"]); // Hello Object
// console.log(obj[key]); // Hello Object
// console.log(obj[123]); // Hello Num

// Вычисление имен свойств ES6

// let prifix = "foo";

// let obj = {
// 	[prifix + "bar"]: "Hello",
// 	[prifix + "baz"]: " world"
// }

// console.log(obj["foobar"] + obj["foobaz"]); // Hello world

// Свойства и методы

// Массивы

// let myArray = ["bar", "hello", "baz"];
// // myArray.baz = "baz";
// myArray["baz"] = "baz";

// console.log(myArray[0]);
// console.log(myArray.length);
// console.log(myArray);

// Дублирование объектов

// function foo(){}
// let obj = {c: true};
// let myArray = [];

// let myObject = {
// 	a: 2,
// 	b: foo,
// 	d: obj,
// 	c: myArray
// };

// myArray.push(obj, myObject);
// console.log(myObject);

// let myObjectCopy = myObject; // myObject ni copya atamiz! Test
// myObjectCopy.a = 3;
// console.log(myObjectCopy);

// console.log(myObjectCopy.b === myObject.b);
// console.log(myObjectCopy.d === myObject.d);
// console.log(myObjectCopy.c === myObject.c);

// let copyObject = Object.assign({}, myObject); // myObject ni copya atamiz! Test 2
// copyObject.a = 3;
// console.log(copyObject);

// console.log(copyObject.a === myObject.a);
// console.log(copyObject.b === myObject.b);
// console.log(copyObject.d === myObject.d);
// console.log(copyObject.c === myObject.c);

// Дескрипторы свойств

// console.log(Object.getOwnPropertyDescriptor(myObject, "c"));

// Writable
// Характеристика writable определяет возможность изменения значения свойства.

// let myObject = {};

// Object.defineProperty(myObject, "a", {
// 	value: 2,
// 	writable: false, // запись невозможна
// 	configurable: true,
// 	enumerable: true
// });

// console.log(myObject);
// myObject.a = 3; // TypeErorr
// console.log(myObject); // 2

// Configurable
// Если свойство допускает настройку, вы можете изменить опреде-
// ление его дескриптора при помощи функции defineProperty(..):

// let myObject = {
// 	a: 2
// };

// console.log(myObject.a);
// myObject.a = 3;
// console.log(myObject.a)

// Object.defineProperty(myObject, "a", {
// 	value: 2,
// 	writable: true,
// 	configurable: false, // настройка невозможна!
// 	enumerable: true
// });

// myObject.a = 4;
// console.log(myObject.a);

// Object.defineProperty(myObject, "a", {
// 	value: 5,
// 	writable: true,
// 	configurable: true,
// 	enumerable: true
// }); // TypeErorr

// Также configurable:false блокирует возможность использования
// оператора delete для удаления существующего свойства:

// let myObject = {
// 	a: 2
// };

// console.log(myObject.a);
// delete myObject.a;
// console.log(myObject.a);

// Object.defineProperty(myObject, "a", {
// 	value: 2,
// 	writable: true,
// 	configurable: false, // настройка невозможна!
// 	enumerable: true
// });

// console.log(myObject.a);
// delete myObject.a;
// console.log(myObject.a);

// Enumerable
// let myObject = {};

// Object.defineProperty(myObject, "a",{
// 	enumerable: true,
// 	value: 2
// });

// Object.defineProperty(myObject, "b",{
// 	enumrable: false,
// 	value: 3
// });

// console.log(myObject.b);
// console.log(("b" in myObject)); // b ni tekshiramiz bomi yoqmi
// console.log(myObject.hasOwnProperty("b")); // b ni tekshiramiz bomi yoqmi

// for(let value in myObject){
// 	console.log(value, myObject[value])
// }

// console.log(myObject.propertyIsEnumerable("b")); // false
// console.log(Object.keys(myObject)); // возвращает массив всех перечисляемых свойств
// console.log(Object.getOwnPropertyNames(myObject)); // возвращает массив всех свойств (как перечисляемых, так и нет)

// Объектные константы

// let myObject = {};

// Object.defineProperty(myObject, "KANSTANT", {
// 	value: 43,
// 	writable: false,
// 	configureble: false
// });

// console.log(myObject.KANSTANT);

// Запрет расширения

// let myObject = {
// 	a: 2
// };

// Object.preventExtensions(myObject);
// myObject.b = 3;
// console.log(myObject.b); // object is not extensible

// Seal

// let obj = {
// 	a: 2,
// 	b: 3,
// 	d: 4
// };

// Object.seal(obj);
// console.log(Object.getOwnPropertyDescriptor(obj, "d"));
// // obj.c = 5; // Невозможно добавить свойство c, объект не расширяемы
// obj.a = 1;
// console.log(obj);
// delete obj.a; // Error delete

// Freeze

// let obj = {
// 	a: 2,
// 	b: 3,
// 	d: 4
// };

// Object.freeze(obj);
// console.log(Object.getOwnPropertyDescriptor(obj, "a"));
// // obj.a = 1;
// obj.c = 5;

// let obj = {
// 	a: 1
// };

// console.log(obj);
// console.log(obj.b);
// console.log(obj);

// Геттеры и сеттеры

// let user = {
// 	// name: "Sarvar",
// 	// surname: "Artikov",

// 	get fullName(){
// 		return `${this.name} ${this.surname}`;
// 	},

// 	set fullName(value){
// 		[this.name, this.surname] = value.split(" ");
// 	}
// };

// // console.log(user.fullName);
// // console.log(user);
// user.fullName = "Name Family";
// console.log(user);

// let obj = {
// 	get a(){
// 		// определить геттер для `a`
// 		return this._a_;
// 	},

// 	set a(value){
// 		// определить сеттер для `a`
// 		this._a_ = value * 2;
// 	}
// };

// obj.a = 2;
// console.log(obj._a_); // 4
// console.log(obj);
// obj._a_ = 3;
// console.log(obj._a_); // 3

// Существование

// let obj = {
// 	a: 2
// };

// // console.log(obj.a);
// console.log(("a" in obj)); // true
// console.log(("b" in obj)); // false

// console.log(obj.hasOwnProperty("a")); // true
// console.log(obj.hasOwnProperty("b")); // fale

// Перебор
// Здесь перебираются не значения, а индексы, которые использу-
// ются для обращения к значениям (myArray[i]).

// let mass = [1, 2, 3];
// mass.bar = "bar";

// console.log(mass);

// for(let i  = 0; i <= mass.length; i++){
// 	console.log(mass[i]);
// } // bar undefined

// for..of
// Для перебора массивов

let mass = [1, 2, 3];
mass.bar = "bar";

// console.log(mass);

for(let index of mass){
	console.log(index);
}

// Для перебор бъектов

let obj = {
	a: "bir",
	b: "ikki",
	d: "uch"
};

for(let indexObj in obj){
	console.log(obj[indexObj]);
}

























