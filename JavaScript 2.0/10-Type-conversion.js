// "use strict"

// Преобразование типов
// let a = 42;
// let b = a + ""; // number to string
// console.log(typeof b); // > string

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
// console.log(b);
// console.log(d);

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

// // определить нестандартную сериализацию значения JSON
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
// console.log(a);

// let b = JSON.stringify(obj, function(k, v){
// 	if(k !== "c"){
// 		return v;
// 	}
// });
// console.log(b);

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

// console.log(Boolean("''")); // > true
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

let a = "1.5";
let b = 1+ +a;
console.log(b); // > 2.5

// let a = "1.5";
// let b = 1+ -a;
// console.log(b); // > -0.5




































