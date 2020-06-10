"use strict"

// Преобразование JSON в строку

// let a = JSON.stringify(27);
// let b = JSON.stringify("27");
// let c = JSON.stringify("null");
// let d = JSON.stringify("true");

// console.log(a); // > string
// console.log(b); // > string
// console.log(c); // > string
// console.log(d); // > string

// let a = JSON.stringify(undefined);
// let b = JSON.stringify([1, function(){}, 2]); // massivni ichinda chiqsa o'rnina null chiqadi
// let d = JSON.stringify({a:1, b:function(){}, d:2}); // objectda chiqsa o'tgazib yuboriladi
// console.log(a);
// console.log(b); // > 1, null, 2
// console.log(d); // > 1,2

// let o = {};

// let obj = {
// 	a: 2,
// 	b: o,
// 	c: function(){}
// };

// // // создать циклическую ссылку в > а
// // o.e = obj;

// // // выдаст ошибку из-за циклической ссылки
// // JSON.stringify(obj);

// определить нестандартную сериализацию значения JSON
// obj.toJSON = function(){
// 	// включить для сериализации только свойство a
// 	return{
// 		a: this.a
// 	}
// };

// let result = JSON.stringify(obj);
// console.log(result);

// let obj = {
// 	b: 27,
// 	c: "27",
// 	d: [1, 2, 3]
// };

// let a = JSON.stringify(obj, ["b", "c"]);
// console.log(a); // > b,c

// let b = JSON.stringify(obj, function(k, v){
// 	if(k !== "c"){
// 		return v;
// 	}
// });
// console.log(b); // > b,d

// let d = JSON.stringify(obj, null, 3); // "----"
// console.log(d);

// ToNumber

// let a = true == 1;
// console.log(a); // > true

// ToBoolean
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(false)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(+0)); // false
// console.log(Boolean(-0)); // false
// console.log(Boolean(NaN)); // false

// console.log(Boolean("|")); // > true
// console.log(Boolean(obj = {})); // > true

// Ложные объекты

// let a = new Boolean(false);
// let b = new Boolean(0);
// let c = new Boolean("");

// let d = Boolean(a && b && c);
// console.log(d); // > true

// Истинные значения

// let a = {};
// let b = [];
// let d = function(){};

// let result = Boolean(a && b && d);
// console.log(result); // true!

// Явные преобразования
// Number <--> String
// let a = 27;
// // let b = String(a);
// let b = a.toString();
// console.log(typeof b); // type string!

// String <--> Number
// let a = "27";
// // let b = Number(a);
// let b = +a;
// console.log(typeof b); // > type number!

// let a = "1.5";
// let b = 1+ +a;
// console.log(b); // > 2.5

// let a = "1.5";
// let b = 1+ -a;
// console.log(b); // > -0.5

// Преобразование даты в число

// let timeStamp = +new Date();
// // let timeStamp = +new Date; Agar argument yo'q bo'lsa
// console.log(timeStamp);

// let timeStamp = new Date().getTime();
// console.log(timeStamp);

// Но еще лучше воспользоваться статической функцией Date.поw(), добавленной в ES5:

// let timeStamp = Date.now();
// console.log(timeStamp);

// Занятный случай с оператором ~
// console.log(~27); // -(42+1) ==> -43

// let a = "Hello world";

// if(~a.indexOf("lo")){
// 	console.log("'lo' bor a ni ichinda");
// } // true

// Усечение битов
// console.log(~~27.35);

// console.log(Math.floor(-27.6)); // > -28
// console.log(~~-27.6); // > -27

// Явные преобразования: разбор числовых строк

// let a = "27";
// let b = "27px";
// let d = "27.45%";

// console.log(Number(a)); // > type number 27
// console.log(Number(b)); // > NaN

// console.log(parseInt(a)); // > 27
// console.log(parseInt(b)); // > 27

// console.log(parseFloat(d)); // > 27.45

// Явные преобразования:--> Boolean

// let a = "0";
// let b = [];
// let d = {};

// let c = a && b && d;
// console.log(Boolean(c)); // true

// let f = "";
// let g = null;
// let t = 0;
// let l;

// console.log(Boolean(f)); // > false
// console.log(Boolean(g)); // > false
// console.log(Boolean(t)); // > false
// console.log(Boolean(l)); // > false

// // Разработчики JS чаще всего используют оператор двойного отрицания !!
// console.log(!!f); // > false
// console.log(!!g); // > false
// console.log(!!t); // > false
// console.log(!!l); // > false

// Неявное преобразование
// String <--> Number

// let a = "27";
// let b = 0;
// console.log(a + b); // > 270 type string

// let c = 27;
// let d = 0;
// console.log(c + d); // > 27 type number

// let t = [1,2];
// let g = [3,4];

// console.log(t + g);

// Преобразование чисел в строки
// let a = 42;
// let b = a + ""; // number to string
// console.log(typeof b); // > string

// Неявно преобразовать строку в число

// let a = "27.06";
// let b = a - 0; //- * /
// console.log(typeof b); // > number

// Неявные преобразования: * --> Boolean

// var a = 42;
// var b = "аbс";
// var c;
// var d = null;

// if((a && d) || c){ // > false demak ishlamidi
// 	console.log("if ni ichina true tushdi");
// }
























