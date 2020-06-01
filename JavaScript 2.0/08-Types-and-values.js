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
// abc[3] = "3";

// console.log(abc);

// console.log(abc[1] === abc[2]); // > true

// let abc = [];

// abc[0] = 0;
// abc["foo"] = 1;
// console.log(abc.length); // > 1 / Agar key ni o'rnina tip sring ishlatilsa length xosobga olmidi

// Подобие массивов

// function foo(){
// 	// let arr = Array.prototype.slice.call(arguments);
// 	let arr = Array.from(arguments); // ES6
// 	arr.push("Olma");
// 	console.log(arr);
// }

// foo("Nok", "Anor", "Uzum");


















































