"use strict"

// Грамматика

// Команды и выражения
// let a = 3 * 8; // 3 * 8 > выражения
// let b = 5; // > выражения
// b; // > выражения
// // а и b являются значения

// Для сохранения завершающего значения
// let a,b;
// a = eval("if(true){b = 25 + 2}"); // > 27
// console.log(a === 27); // > true

// let a,b;

// a = do{
// 	if(true){
// 		b = 25 + 2;
// 	}
// }; > 27 ES7!

// function foo(){
// 	a = 2 + 2;
// }
// let a = 1;
// foo(); // результат: undefined, побочный эффект: изменение 'a'

// let a = 27;
// // let b = a++; // постфиксном формат
// let b = ++a; // префиксном формат

// let a = 27;
// let b = (a++, a); // oparatro (,) vrajenya izinma keyin ishlashni bildiradi
// console.log(b);

// let obj = {
// 	a: 27
// };

// Object.defineProperty(obj, "a", {
// 	configurable: false
// });

// console.log(delete obj.a); // > false

// побочный эффект =
// let a;
// a = 27;
// console.log(a); // > 27

// Прерывание цикла: «break»

// let sum = 0;
// while(true){
// 	let value = +prompt("Chislo yozing", '');

// 	// Директива break в строке полностью прекращает выполнение цикла и передаёт
// 	// управление на строку за его телом, то есть на console.log.

// 	if(!value) break;
// 	sum += value;
// }

// console.log("Summa " + sum);

// Переход к следующей итерации: continue
// При её выполнении цикл не прерывается, а переходит к следующей итерации
// (если условие все ещё равно true).

// for(let i = 0; i < 10; i++){
// 	if(i % 2 == 0){continue;}
// 	console.log(i);

// 	// if(i % 2 == 0){
// 	// 	console.log(i);
// 	// }
// }

// Метки

// let str = "";

// foo: for(let i = 0; i < 5; i++){
// 	if(i === 1){
// 		continue foo;
// 	}

// 	str += i; // agar if ishlamasa str ga qo'shadi i ni
// }

// console.log(str); // > 0,2,3,4

// outer: for(let i = 0; i < 3; i++){
// 	for(let j = 0; j < 3; j++){
// 		let input = prompt(`Yozing ${i}, ${j}`, '');
// 		// если пустая строка или Отмена, то выйти из обоих циклов
// 		if(!input){break outer;}
// 	}
// } // > metka garak agar blokla vlojenniy bolsa (continue) faqat siklni ichinda ishlidi

// // break outer будет разорван внешний цикл до метки с именем outer, и управление перейдёт на console
// console.log("Tayyor");

// Блоки
// [] + {}; // > [object object]
// {} + []; // > 0

// Деструктуризация объектов

// function foo(){
// 	return{
// 		a: 27,
// 		b: "Hello"
// 	}
// }

// let {a,b} = foo();
// console.log(a, b); // > 27 Hello

// function foo({a, b, c}){
// 	console.log(a, b, c);
// }

// foo({
// 	a: [1, 2, 3],
// 	c: 27,
// 	b: "Hello"
// });

// Приоритет операторов

// let a = 27;
// let b = "foo";
// let d = [1,2,3];

// console.log(a && b || d); // > foo
// console.log(a || b && d); // > 27

// Плотное связывание
// let a = 27;
// let b = "foo";
// let c = false;
// let s = "result true";

// let d = (a && b || c) ? (c || b) ? s : (c && b) : a;
// console.log(d); // > 27

// Ассоциативность

let d = (false ? "uchunchi" : (false ? "birinchi" : "ikkinchi"));
console.log(d); // > ikkinchi














































