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

// console.log(obj.key);
// // console.log(obj["key 000 key"]);
// console.log(obj[key]);
// console.log(obj[123]);

// Вычисление имен свойств ES6

// let prifix = "foo";

// let obj = {
// 	[prifix + "bar"]: "Hello",
// 	[prifix + "baz"]: " world"
// }

// console.log(obj["foobar"] + obj["foobaz"]);

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























