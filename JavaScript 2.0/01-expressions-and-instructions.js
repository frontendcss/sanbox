"use strict";
// about:blank

// leteral
//"abs", 353

// Арифметические операторы
// Операции
//+=-

// Остаток от деления (%)

// Логические операторы
// Логическое И (&&)
// Логическое ИЛИ (||)
// Логическое НЕ (!)

// Строковые операторы
// mystring += "bet";
// console.log("my " + "string");

// Условный (тернарный) оператор
// condition ? val1 : val2
// let status = (age >= 18) ? "val1" : "val2";

// Оператор запятая
// let abs = 1;
// let result = (abs++, abs);
// console.log(result);

// Унарные операторы
// delete obj, valueObject, array;

/*
Значение operand может быть строкой, переменной, дескриптором,или объектом,
тип которого следует определить. Скобки вокруг операнда необязательны.
 */
// Оператор typeof
// let str = "String";
// let num = 2;
// let bull = true;
// let arr = [];
// let obj = {};

// console.log(typeof(str));
// console.log(typeof(num));
// console.log(typeof(bull));
// console.log(typeof(arr));
// console.log(typeof(obj));
// console.log(typeof typeof(obj));

// Оператор void

// let noNember = "abs";
// console.log(void(noNember));

// Оператор группировки
// let b = 2;
// let c = 3;
// let a = 1;

// let result = a + (b * c);
// console.log(result);

// Constant
// const CAN = "abs";
// console.log(CAN);
// CAN = "dsb";

// Блоки
// {
// 	let abs = "Limpus";
// 	console.log(abs);
// }
// console.log(abs);

// Условные конструкции
/*
при приведении к логическому значению они станут значением false, такие
значения включают в себя 
"" (пустая строка)
0, -0, NaN (некорректное число)
null, undefined
false

*/
// if (выражение) {
// 	// Инструкция
// }else{
// 	// Инструкция
// }

// true ? 1 : 2 // 1
// false ? 1 : 2 // 2

//  Циклы while и do

// let number = 0;
// while(number <= 12){
// 	console.log(number);
// 	number = number + 2;
// }

// все строки, кроме "", преобразуются в true

// let userName;

// Циклы
// let num = 10;
// while(num--){
// 	console.log(num);
// }

// let num2 = 1;

// do{
// 	console.log(num2);
// }while(num2--);

// i = i + 1;
// for(let i = 0; i <= 10; i++){
// 	console.log(i);
// }

// Функции

// function func(num){
// 	return num + num;
// }
// let abs = 1;
// console.log(func(abs));

// Область видимости
// технически называемая лексическая область видимости

// let s = 5;
// function fun(){
// 	// let s = 2; agar bu yo'q bo'lasa tashqarida oladi
// 	let a = 1;

// 	function inner(){
// 		let b = 2;
// 		console.log(a + b + s); // a go'rsanadi
// 	}

// 	return inner();
// 	// return b; go'rsanimidi
// }

// fun();

// Объекты

// let obj = {
// 	a: 948,
// 	b: "String",
// 	d: true,
// 	g: function(){
// 		let le = "Hello Object";
// 		return le;
// 	}
// }

// console.log(typeof obj.g);
// Скобочная нотация полезна, если у вас есть имя свойства, содержащее спецсимволы
// console.log(typeof obj["a"])

// Массив

// let mass = [26, "Limpus", true];
// console.log(mass[0]);
// console.log(mass.length);
// console.log(typeof mass);

// Методы встроенных типов

// let a = "Hello world";
// let b = 3.44049;

// console.log(a.length);
// console.log(b.toFixed(1));
// console.log(a.toUpperCase());

// Истинный и ложный

// let obj = {};
// let mass = [];
// function func(){}

// if(func){
// 	console.log("true");
// }

// Равенство
// ==, ===, != и !==

// Неравенство
// <, >, <= и >=

// Переменные
/*Идентификатор должен начинаться с a-z, A-Z, $ или _. Дальше он может содержать
любые из этих же символов плюс цифры 0-9.*/

// Выражения немедленно вызываемых функций (Immediately Invoked Function Expressions (IIFEs))
// Функции IIFE также могут возвращать значения:
// (function foo(){
// 	console.log("Hello world");
// })()

// Замыкание

// function foo(x){
// 	function add(y){
// 		return y + x;
// 	};
// 	return add;
// }

// let result1 = foo(1);
// console.log(result1(3));


// let result2 = foo(5);
// console.log(result2(10));

// Рекурсия

// Модули

// function User(){
// 	let username;
// 	let password;

// 	function doLogin(user, pwo){
// 		username = user;
// 		password = pwo;
// 	};

// 	let poblicAPI = {
// 		login: doLogin,
// 	}

// 	return poblicAPI;
// }


// let fred = User;
// fred("Limpus", "fd09945hgio");

// Идентификатор this

// Agar "use strict" yonib durgan bo'lsa oshibka baradi
// function func(){
// 	console.log(this.th);
// }

// var th = "Glabal";
// func();

// var obj = {
// 	th: "Local",
// 	svs: func
// }

// obj.svs();

// var obj1 = {
// 	th: "Erorr EcmaScript ES6"
// }

// func.call(obj1);

// new func();

// Прототипы

let obj = {
	a: 26
};

let proto = Object.create(obj); // prototype link
proto.b = "Limpus";

console.log(proto.a);

















