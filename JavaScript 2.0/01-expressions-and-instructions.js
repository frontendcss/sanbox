// Variable
let age = 26;
let age1 = 26, age2 = 27;
console.log(age2);

var age3 = 25; // -2015
console.log(age);

// Canstant
const AGE = 27;
console.log(AGE);

// Выполнение функции называется ее вызовом
// Значения, передаваемые функциям, называются аргументами
// Разным функциям могут потребоваться разное количество и разные типы аргументов.
// Функция Number преобразует значение в число.
// let password = prompt("Parolni yozing");
// console.log(password);

// Возвращение значений
console.log(Math.max(2,3,4,5,6))
console.log(Math.min(2,4) + 100);

// Условное выполнение
// let theNumber = Number(prompt("Number yozing"));
// if(!Number.isNaN(theNumber)){
// 	console.log("oqnoni ichina yozilgan "+ theNumber +" qaytardi");
// }

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

let qubik = "";
for(let counter = 7; counter >= qubik.length; qubik += "#"){
	console.log(qubik);
}


let count;

for(let counter = 0; counter <= 100; counter += 1){
	if(counter % 3 == 0 ){
		count = counter;
		console.log(count + " Fizz");
	}
}







