"use strict"

// Типы
// Встроенные типы
// null
// undefined
// boolean
// number
// string
// object
// symbol ES6
// Все эти типы, за исключением object, называются «прими­тивами»

// console.log(typeof undefined === "undefined"); // true
// console.log(typeof true === "boolean"); // true
// console.log(typeof 27 === "number"); // true
// console.log(typeof "Limpus" === "string"); // true
// console.log(typeof {user: "soart"} === "object"); // true
// console.log(typeof Symbol() === "symbol"); // true

// console.log(typeof null === "object"); // true // Error javascript!

// «подтипы» объектов
// function foo(a, b){
// 	console.log(foo.length);
// }

// foo();

// Massiv
// console.log(typeof [1,2,3] === "object"); // true

// Значения как типы
// let a = "42";
// console.log(typeof a ); // string

// a = 42;
// console.log(typeof a); // > number

// a = "42";
// console.log(typeof a); // > string

// a = 42;
// console.log(typeof typeof a); // > string

// undefined и необъявленные переменные

// let a;
// console.log(typeof a);
// console.log(typeof b); // Erorr JavaScrit > undeclared

// typeof для необъявленных переменных

// let DEBUG = true; 

// if(typeof DEBUG !== "undefined"){
// 	console.log("Debug bilan 'undefined bir xil amas'");
// }else{
// 	console.log("Bir xil");
// }

// let abc = (false === true) ? "ikkinsi dang" : function(){console.log("Hello");};
// let a = abc();

// Значения

// Массивы
// let abc = [1,"2",[3]];
// console.log(abc[2][0]);
// console.log(abc.length);

// let abc = [];
// abc[0] = "0";
// abc[1] = "1";
// abc[2] = "2";

// console.log(abc);
// console.log(abc.length);

// delete abc[0];
// console.log(abc.length); // Udalit atsakam length o'zgarmadi

// let abc = [];
// abc[0] = "0";
// abc[2] = undefined;
// abc[3] = undefined;

// console.log(abc);

// console.log(abc[1] === abc[2]); // > true

// let abc = [];

// abc[0] = 0;
// abc["foo"] = 1;
// console.log(abc.length);
// > 1 / Agar key ni o'rnina tip string ishlatilsa length xosobga olmidi

// Подобие массивов

// function foo(){
// 	// let arr = Array.prototype.slice.call(arguments);
// 	let arr = Array.from(arguments); // ES6
// 	arr.push("Olma");
// 	console.log(arr);
// }

// foo("Nok", "Anor", "Uzum");

// Строки
// String.prototype

// let a = "foo";
// let b = ["f", "o", "o"];

// console.log(a.length);
// console.log(b.length);

// // simvolni pazitsyasi go'rsatadi
// console.log(a.indexOf("f"));
// console.log(b.indexOf("o"));

// let c = a.concat("bar");
// let d = b.concat(["b","a","r"]);

// CтpoкиjavaScript неизменяемы, тогда как массивы вполне могут изменяться (мутировать)
// console.log(c === a); // false
// console.log(d === b); // false

// c = a.toUpperCase();
// console.log(a === c);

// b.push("!");
// console.log(b);

// let t = Array.prototype.join.call(a, "-");
// console.log(t); // > f-o-o

// // Перестановка строки в обратном поряд­ке
// console.log(a.reverse); // > undefined
// console.log(b.reverse());

// let g = a.split(""); // разбиение ·а· на массив символов
// g.reverse(); // переставить массив символов в обратном порядке
// g.join(""); // снова объединить массив символов в строку
// console.log(g);

// Числа
// Стандарт IEEE 754
// Number.prototype

// let a = 5E10;
// console.log(a); // > 5*0
// console.log(a.toExponential()); // > 5e+10

// let a = 27.34;
// console.log(a.toFixed(1)); // > 27.34 // type string!

// console.log(27.toFixed(2)); // SyntaxError
// console.log((27).toFixed(1)); // > 27.0
// console.log(27..toFixed(2)); // > 27.00
// console.log(27.00.toFixed(1)); // > 27.0

// Малые дробные значения
// let a = 0.1 + 0.2;
// console.log(a.toFixed(17)); // 0.1 + 0.2 === 0.3 > false

// Проверка целых чисел

// является ли значение целым числом
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.000)); // true
console.log(Number.isInteger(27.7)); // false

// является ли значение безопасным целым чис­лом

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(Number.isSafeInteger(Math.pow(2,53))); // false









































