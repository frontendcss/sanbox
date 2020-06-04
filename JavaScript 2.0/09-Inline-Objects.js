"use strict"
// Встроенные объекты (natives)

// String()
// Number()
// Boolean()
// Array()
// Object()
// Function() о RegExp()
// Date()
// Error()
// Symbol() - начиная с ES6!

// let obj = new String("Hello World");
// console.log(obj.toString());

// console.log(typeof obj); // > object
// console.log(obj instanceof String); // > true
// console.log(Object.prototype.toString.call(obj)); // > [object String]

// // Суть в том, что new String("аЬс") создает объектнуюо бертку для
// // строки "аЬс ", а не само примитивное значение "аЬс ".
// console.log(obj);

// Внутреннее свойство [[Class]]

// console.log(Object.prototype.toString.call([1,2,3])); // > [object Array]
// console.log(Object.prototype.toString.call(/regex-literal/i)); // [object RegExp]
// console.log(Object.prototype.toString.call(null)); // [object Null]
// console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
// console.log(Object.prototype.toString.call("abc")); // [object String]
// console.log(Object.prototype.toString.call(27)); // [object Number]
// console.log(Object.prototype.toString.call(true)); // [object Boolean]

// Упаковка

// let a = "abc";
// console.log(a.length);
// console.log(a.toUpperCase());

// Ловушки при работе с объектными обертками

// let a = new Boolean(false);

// if(a){
// 	console.log("Oops");
// }

// let conObject = Object(a);
// console.log(conObject instanceof String); // true
// console.log(Object.prototype.toString.call(conObject)); // > [object String]

// Распаковка

// let a = new Number(27);
// let b = new String("Limpus");
// let c = new Boolean(true);

// console.log(typeof a.valueOf()); // > number > 27
// console.log(typeof b.valueOf()); // > string > Limpus
// console.log(typeof c.valueOf()); // > bloolean > true


// Массивы, содержащие как минимум один «пустой элемент», часто называются «разреженными» (sparse)
// Array(..)

// let a = Array(3);
// let b = [undefined, undefined, undefined];
// let c = [];
// c.length = 3;

// console.log(a); // > [empty × 3]
// console.log(b); // > [undefined, undefined, undefined]
// console.log(c); // > [empty × 3]

// let d = [1,2,3];

// // «разреженныий» (sparse)
// delete d[1];
// console.log(d); // > [1, empty, 3]

// let a = Array(3);
// console.log(a.join("1")); // > 11

// массив со значениями undefined

let a = Array.apply(null, {length: 3});
console.log(a); // undefined * 3




























