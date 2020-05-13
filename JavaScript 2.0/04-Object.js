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
// console.log(typeof abc);

// let abcObj = new String("I, am String Object");
// console.log(typeof abcObj);

// язык автоматически преобразует строковый примитив в объект String
// let abc = "I,am String";
// console.log(typeof abc);

let obj = {
	123: "Hello Num", // key string tipa aylanadi
	key: "Hello",
	"key 000 key": "Hello Object"
};

let key = "key 000 key";

console.log(obj.key);
// console.log(obj["key 000 key"]);
console.log(obj[key]);
console.log(obj[123]);











