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
// let b = JSON.stringify([1, function(){}, 2]);
// let d = JSON.stringify({a:1, b:function(){}, d:2});
// console.log(a);
// console.log(b);
// console.log(d);

// let o = {};

// let obj = {
// 	a: 2,
// 	b: o,
// 	c: function(){}
// };

// // создать циклическую ссылку в > а
// o.e = obj;

// //выдаст ошибку из-за циклической ссылки
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
// });s
// console.log(b);

// let d = JSON.stringify(obj, null, 3); // "----"
// console.log(d);

























































