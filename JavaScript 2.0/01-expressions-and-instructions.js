// Variable
// let age = 26;
// let age1 = 26, age2 = 27;
// console.log(age2);

// var age3 = 25; // -2015
// console.log(age);

// Canstant
// const AGE = 27;
// console.log(AGE);

// Выполнение функции называется ее вызовом
// Значения, передаваемые функциям, называются аргументами
// Разным функциям могут потребоваться разное количество и разные типы аргументов.
// Функция Number преобразует значение в число.
// let password = prompt("Parolni yozing");
// console.log(password);

// Возвращение значений
// console.log(Math.max(2,3,4,5,6))
// console.log(Math.min(2,4) + 100);

// Условное выполнение
// let theNumber = Number(prompt("Number yozing"));
// if(!Number.isNaN(theNumber)){
// 	console.log("oqnoni ichina yozilgan "+ theNumber +" qaytardi");
// }

// true ? 1 : 2 // 1
// false ? 1 : 2 // 2

//  Циклы while и do

// let number = 0;
// while(number <= 12){
// 	console.log(number);
// 	number = number + 2;
// }

// все строки, кроме "", преобразуются в true

// let userName;
// do{
// 	userName = prompt("Isminggizni yozmang");
// } while(!userName);

// console.log(userName);

// Циклы for

// for(let numberUser = 0; numberUser <= 20; numberUser = numberUser + 2){
// 	console.log(numberUser);
// }

// Принудительный выход из цикла

// for(let pitsa = 20; ; pitsa = pitsa + 1){
// 	if(pitsa % 7 == 0){
// 		console.log(pitsa);
// 		break;
// 	}
// }

// Диспетчеризация по значению с помощью switch

// switch(prompt("Ko'chada qanaka hovo?")){
// 	case "quyoshli":
// 	case "bulutli":
// 	console.log("Aylanib kelsa bo'ldi");
// 	break;

// 	case "yomg'ir":
// 	console.log("Ko'chada yomg'ir zo'ntik bilan chiqish garak");
// 	break;
// }

//Dz 1
// let qubik = "";
// for(let counter = 7; counter >= qubik.length; qubik += "#"){
// 	console.log(qubik);
// }

//Dz 2
// for(let x = 0; x <= 100; x = x + 1){
// 	let output = "";
// 	if(x % 3 == 0) output = "FizzBuzz";
// 	if(x % 5 == 0) output = "Buzz";
// 	console.log(output || x);
// }

// Dz 3
// let size = 8;
// let bloc = "";

// for(let x = 0; x <= size; x++){
// 	for(let y = 0; y <= size; y++){
// 		if((x + y) % 2 == 0){
// 			bloc += " ";
// 		}else{
// 			bloc += "#";
// 		}
// 	}
// 	bloc += "\n";
// }

// console.log(bloc);

//Function 

const power = function (ikki, on){
	let result = 1;
	for(let count = 0; count < on; count++){
		result *= ikki;
	}
	return result;
};

console.log(power(2,10));

const can = function(){};
console.log(can());


// Функции как значения
let funct = function(v){
	console.log("Hello " + v);
}

funct("birchi funct");
let funct2 = funct; // Capy function
funct2("Copy function");


// Декларативная запись

fun("Декларативная запись")
function fun (param){
	console.log(param);
}

//Трелочные функции

const funct3 = param => {
	console.log(param);
}

funct3("Трелочные функции");


// Замыкание

// function counter(){
// 	let count = 0;

// 	return function(){
// 		count++;

// 		return count;
// 	}
// }

// let result = counter();
// console.log(result());
// console.log(result());
// console.log(result());

function counter(){
	let count = 0;

	return () => {
		count++;

		return count;
	}
}


let result = counter();
console.log(result());

// Рекурсия











