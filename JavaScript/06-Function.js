// var func = function(callback){
// 	var name = "Sarvar";
// 	callback(name);
// }

// func(function(n){
// 	console.log("Hello " + n);
// });

// var func = function(){
// 	return function(){
// 		console.log("Hi");
// 	}
// }

// func()();

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
function func(number1, number2){
	number1++;
	number2++;
	console.log("Birinchi Number " + number1);
	console.log("Ikkinchi Number " + number2);
}

var number1 = 10;
var number2 = 20;

func(number1,number2);
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

// Получение значений аргументов с помощью объекта a r g u m e n t s
function flexibleWelcome() {
	var welcome = "Добро пожаловать,";
	for (i = 0; i < arguments.length; i++) {
	welcome = welcome + arguments[i] + " ";
}
return welcome;
}

console.log(flexibleWelcome("Christopher" , "James" , "Phoenix" , "Minnick"));
console.log(flexibleWelcome("Eva" , "Ann" , "Holland"));
console.log(" ");

// Scope Function
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
































