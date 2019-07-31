/*
Параметры это имена, которые вы указываете в определении функции.
Аргументы это значения, которые вы передаете функции.

function nameFunction(параметр){
	BodyFunction
	Инструкция
	Инструкция
	Инструкция
	return возврат значения
}

FunctionCall("Argument");
*/

var Soart = "Soart";
var Limpus = "Limpus";
// В определении функции разрешается задавать до 255 параметров
function test(paramOne, paramTru){
	console.log("Hello " + paramOne);
	console.log("Hello " + paramTru);
}
test(Soart,Limpus);
console.log(" ");

//Передача аргументов по значению
function func0(number1, number2){
	number1++;
	number2++;
	console.log("Birinchi Number " + number1);
	console.log("Ikkinchi Number " + number2);
}

var number1 = 10;
var number2 = 20;

func0(number1,number2);
console.log(" ");

//Вызов функции с неполным числом аргументов
function func2(param1, param2, param3){
	console.log(param1);
	console.log(param2);
	console.log(param3);
}

func2("param1", "param2");
console.log(" ");

// Аргументы по умолчанию
function func3(param1){
	if(typeof param1 === 'undefined'){
		console.log("parametr pustoy");
	}else{
		console.log("Hello " + param1);
	}
}

func3("Soart")
console.log(" ");

// Область видимости функции
var i = 15;
function func(){
	var i = 10;
	console.log(i);
		function innerFunc(){
			console.log(i);
			var i = 20;
		}
	innerFunc();
}
func();

//Анонимные функции
var AnaFunction = function (){
	var text = "AnamimFunction";
	return text;
}

/*
Различия между анонимными и именованными функциями

1) Между созданием именованной функции и присвоением анонимной функции пере­менной имеются
важные и иногда полезные различия. Первое из них состоит в том, что анонимные функции, 
присвоенные переменной, существуют и могут вызываться лишь после выполнения операции присваивания.
Доступ же к именованным функци­ям возможен в любом месте программы.

2) Суть второго различия заключается в том, что в случае анонимных функций зна­чение переменной
может быть в любой момент изменено, и ей может быть присвоена другая функция. Это делает механизм
анонимных функций более гибким по сравне­нию с именованными функциями.

*/

//Самовыполняющиеся анонимные функции

var ananim = "Variable Glabal";

(function(){
	var lacalV = "Lacal Variable";
	console.log("Ananim Function! " + ananim);
})()

// console.log(lacalV);

function test(){
	var testLacalV = "Test Lacal Variable";
	console.log("Test Ananim Function");
}

test();

// console.log(testLacalV);

//Рекурсия

// function recur(index){
// 	console.log(index);
// 	if(index < 10){
// 		recur(index + 1);
// 	}
// 	else{
// 		return;
// 	}
// }
// recur(1);


function showMessage(text) {
	text = text || 'Текст не передан';
	console.log(text);
}

showMessage();

/*
showMessage(..)     // префикс show, "показать" сообщени
getAge(..)          // get, "получает" возраст
calcD(..)           // calc, "вычисляет" дискриминант
createForm(..)      // create, "создает" форму
checkPermission(..) // check, "проверяет" разрешение, возвращает true/false
*/

// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return 'разрешили?';
// 	}
// }

// console.log(typeof checkAge(20));

// function checkAge(age){
// 	return (age > 18) ? true: console.log("разрешили?");
// }

// checkAge(20);

// function checkAge(age) {
// 	return (age > 18) || console.log('разрешили?');
// }

// checkAge(20);

// Функцию можно скопировать в другую переменную:
function func(){
	console.log("copyFunc");
}
var copyFunction = func;
copyFunction();


// Объявление Function Expression

// Function Declaration
sum1();
function sum1(){
	console.log("Hello Declaration Function");
}

// Function Expression
var sum2 = function(){
	console.log("Hello Expression Function");
}

sum2();

// Условное объявление функции 'use strict'

// var age = +prompt("Сколько вам лет?", 20);
// if (age >= 18) {
// 	function sayHi() {
// 		alert( 'Прошу вас!' );
// 	}
// } else {
// 	function sayHi() {
// 		alert( 'До 18 нельзя' );
// 	}
// }

// sayHi();

// var age = +prompt("Сколько вам лет?", 20);
// var sayHi;
// if (age >= 18) {
// 	sayHi = function() {
// 		alert( 'Прошу вас!' );
// 	}
// } else {
// 	sayHi = function() {
// 		alert( 'До 18 нельзя' );
// 	}
// }
// sayHi();

// Анонимные функции
// function ask(quastions, ok, no){
// 	if(confirm(quastions)){
// 		ok();
// 	}
// 	else{
// 		no();
// 	}
// }

// function ok(){
// 	alert("Siz Rozi Bo'ldingiz");
// }

// function no(){
// 	alert("Siz No Rozisiz");
// }

// ask("Siz Rozimisizs?", ok, no);

// ask(
// 	"Siz Rozimisizs?",
// 	function(){alert("Siz Rozi Bo'ldingiz");},
// 	function(){alert("Siz No Rozisiz");}
// );


// Именованные функциональные выражения
// function func(age, name){
// 	return age + name;
// }

// console.log(func(4, 4));

// var newFunc = func;
// func = null;

// console.log(newFunc(1,1));

console.log(" ");

// Возврат функции
function makeCounter(){
	// LexicalEnvironment = { currentCount: undefined }
	var currentConter = 1;
	// При запуске функция создает объект
	// LexicalEnvironment = { currentCount: 1 }
	return function(){
		return currentConter++;
		// [[Scope]] свойство
	};
}

// var counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

console.log(" ");

var counter2 = makeCounter();
console.log(counter2());
console.log(" ");

// Свойства функции
function makeCounter(){
	function counter(){
		return counter.currentConter2++;
	};
	counter.currentConter2 = 1;
	return counter;
}
var counter2 = makeCounter();
console.log(counter2());
counter2.currentConter2 = 5;
console.log(counter2());
console.log(counter2());

console.log(" ");

// Счётчик-объект
function makeCount(){
	var currentCount = 0;
	return{
		getNext: function(){
			return currentCount++;
		},
		set: function(value){
			currentCount = value;
		},
		reset: function(){
			currentCount = 0;
		}
	};
}

var count = makeCount();

console.log(count.getNext());
console.log(count.getNext());
console.log(count.getNext());

count.set(500);

console.log(count.getNext());
console.log(count.getNext());
console.log(count.getNext());

count.reset();

console.log(count.getNext());
console.log(count.getNext());
console.log(count.getNext());

console.log(" ");

// Счётчик-объект 2

function mekeCount(){
	var currentCount = 1;

	function counter(){
		return currentCount++;
	}

	// ...и добавляем ей методы!
	counter.set = function(value){
		currentCount = value;
	};

	counter.reset = function(){
		currentCount = 1;
	};

	return counter;
}

var count = mekeCount();

console.log(count());
console.log(count());
console.log(count());

count.set(600);

console.log(count());
console.log(count());
console.log(count());

console.log(" ");

// Сумма через замыкание

function sum(a){
	return function(b){
		return a + b;
	}
}

console.log(sum(10)(20));

// Функция - строковый буфер

function makeBufer(){
	var text = "";

	function buff(price){
		if(arguments.length == 0){
			return text;
		}
		else{
			text += price;
		}
	};

	buff.clear = function(){
		return text = "";
	}

	return buff;
}

var bufer = makeBufer();

bufer("Hello ");
bufer("World ");
bufer("2019");

console.log(bufer());
bufer.clear();
console.log(bufer());

// Модули через замыкания

// var massege = "Hello";

// function funcMassege(){
// 	document.write(massege);
// }

// + - !
(function(){
	var massege = "Hello";

	function funcMassege(){
		document.write(massege);
	}

	funcMassege();
}());

// Управление памятью в JavaScript
/*Есть одно упрощение для работы с памятью: «значение остаётся в памяти,
пока на него есть хотя бы одна ссылка».*/

/* Объект LexicalEnvironment живёт ровно до тех пор, пока на него существуют ссылки.
В коде ниже после удаления ссылки на g умирает:*/

function f() {
	var value = 123;

	function g() {}

	return g;
}

var g = f(); // функция g жива
// а значит в памяти остается соответствующий объект переменных f()

g = null; // ..а вот теперь память будет очищена


function testPam(){
	var test = "Del";

	function testDel(){
		console.log(test);
	}

	return testDel;
}

var testDel2 = testPam();

testDel2();

// Устаревшая конструкция "with"

var a = 5;

var obj = {
	a: 10
}

with(obj){
	console.log(a);
}








