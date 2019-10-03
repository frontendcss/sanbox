// Одно выполнение тела цикла по-научному называется итерация. Цикл в примере выше совершает три итерации.
// Если тело цикла состоит лишь из одной инструкции, мы можем опустить фигурные скобки {…}:

// for (начало; условие; шаг) {
//   // ... тело цикла ...
// }

var olma = 10;

for(var anor = 1; anor <= olma; anor = anor + 1) {
	console.log("Hello World!");
}

// Печатаем страницы в обратном порядке
var totalPages = 5;

for (var page = totalPages; page > 0; page = page - 1) {
	totalPages -= 1;
	console.log("Печатаем страницы в обратном порядке " + totalPages);
}
console.log("-----------");

/*
Печатаем только нечётные страницы

Инкремент (увеличение на единицу) i++ / i = i + 1
Декремент (уменьшение на единицу) i-- / i = i - 1
К-к-комбо!                     i += 2 / i = i + 2
Комбинировать можно не только сложение, но и остальные математические операции:
вычитание -=
умножение *=
деление /=
нахождение остатка %=
Например, i *= 10 будет аналогично i = i * 10.
*/

var totalPages = 12;

for (var page = 1; page <= totalPages; page += 2) {
	console.log("Печатаем только нечётные страницы " + page);
}

var totalPages = 12;

for (var page = 2; page <= totalPages; page += 2) {
	console.log("Печатаем только чётные страницы " + page);
}

// Накопление в цикле

var sum = 0;

for(var i = 1; i <= 10; i++){
	sum += 1;
	console.log('Накопление в цикле ' + sum);
}

// Проверки в циклах

var sumTu = 0;
for(var index = 1; index  <= 10; index++ ){
	if(index <= 2){
		sumTu += 1;
	}
	else {
		sumTu += 2;
		console.log("else ishladi");
	}
	console.log("for ishladi: " + sumTu);
}

// Поиск чётного числа 

var astatoc = 20 % 8;
console.log("Astatoq ot delenya: " + astatoc);

console.log("---------------");
var sum = 0;

for(var i = 1; i < 10; i++){
	// console.log(i);
	if(i % 2 === 0){
		sum += 2;
		console.log("Chotniy chislo " + i);
	}
	else{
		sum += 1;
		console.log("Ne chotniy chislo " + i);
	}
}


// var i = 0;
// var i  = 10;
// var i = 0;

// while(i < 10){
// 	console.log(i++);
// 	// i++;
// }

// while(i--){
// 	console.log(i);
// }

// do {
// 	console.log(i++);
// } while(i < 10);

// for(i = 5; i--;){
// 	console.log(i);
// }

// Директива break полностью прекращает выполнение цикла и передаёт управление на строку за его телом.
// var sum  = 0;
// while(true){
// 	var value  = +prompt("Chisloni yozing", "");
// 	if(!value){break;}
// 	sum += value;
// }

// let id = 0;
// while(id < 6){
// 	if(id === 3){
// 		break;
// 	}
// 	id = id + 1;
// }

// console.log(id);

// alert("Summa: " + sum);


// Директива continue прекращает выполнение текущей итерации цикла.

// Метки для break/continue
// Метка имеет вид "имя:", имя должно быть уникальным. Она ставится перед циклом, вот так:
// outer: for (var i = 0; i < 3; i++) { ... }

// Переход к следующей итерации: continue
for(let i = 0; i < 10; i++){
	if(i % 2 == 0) continue;
	console.log(i);
}
// Вызов break/continue возможен только внутри цикла, и метка должна находиться где-то выше этой директивы

console.log(" ");
for(let i = 2; i <= 10; i += 2){
	console.log(i);
}

console.log(" ");

// var i = 0;
// while (i++ < 5){
// 	console.log(i);
// }

// var sum;
// do{
// 	sum = prompt("Summa ", 0);
// }while(sum <= 100 && sum != null);

// Замените for на while
let y = 0;
while(y < 3){
	console.log(`number ${y}`);
	y++;
}

console.log(" ");

// Повторять цикл, пока ввод неверен
// let num;
// do{
// 	num = prompt("100 dan katta sonni yozing", 0);
// }while(num <= 100 && num);

// console.log(num);


















