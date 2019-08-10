// Выражения
// Выражение — это часть кода, которая преобразуется в значение.

// Операторы
// То, что воздействует на выражения и заставляет их работать, называется оператором.

// Приоритет операторов
// Использование скобок
var a = 1 + ((2 * 3) / 4);
console.log(a);  // результат: 2.5

// Типы операторов
// Операторы присваивания =

/*
Операторы сравнения
== Равно 
!= Не равно 
=== Строго равно
!== Строго не равно
> Больше
>= Больше или равно
< Меньше
<= Меньше или равно
*/

/*
Арифметические операторы
+ Сложение
- Вычитание
* Умножение
/ Деление
% Взятие остатка
++ Инкремент
-- Декремент
*/

// Строковый оператор конкатенации +

// Поразрядные операторы

// Специальные операторы
// Тернарный оператор

// Условный оператор „?“
// let result = (условие) ? значение1 : значение2;
/*
Технически, мы можем опустить круглые скобки вокруг (условие).
Оператор вопросительного знака имеет низкий приоритет, поэтому он выполняется после (условие)
*/

var riddit = 11;

var theme = (riddit > 10)?'riddit katta 10 dan':'riddit kichkina 10 dan';console.log(theme);
if(riddit > 10){console.log("riddit katta 10 dan");}else{console.log("riddit kichkina 10 dan");}

var vaspro = (20 < 10) ? "10 katta 20 dan":
						 (20 < 15) ? "15 katta 20 dan":
						 (20 < 25) ? "25 katta 20 dan":
						 "Yech qaysi do'g'ri galmadi";

console.log(vaspro);

// Оператор запятая var а = 10, b = 0;
var them = (10, 15, 30);
console.log((them, "Hello"));
console.log(them);

//Оператор delete
var mass = ['soart','limpus','web'];
console.log(mass);

delete mass[1];
console.log(mass);
console.log(mass[1]);

mass[1] = '4';
console.log(mass);
console.log(mass[1]);

// Оператор in
if(2 in mass){
	console.log("Это значение есть в массиве " + mass[2]);
}
else{
	console.log("Это значение нет в массиве");
}

// Оператор typeof

var boll = true;
console.log(typeof boll);

//alert
// alert("Limpus");

//prompt
// var madal = prompt("Soart", "Default");
// console.log(madal);

//confirm
// var madal = confirm("Bizni Shartlarga rozimisiz?");
// console.log(madal);

// var userName = prompt("Login", "");

// if(userName == "admin"){
// 	var pass = prompt("Password", "");
// 	if(pass == "Soart"){
// 		alert("Xush keleibsiz " + userName);
// 	}else if(pass == null){
// 		alert("Xech narsa yozilmagan");
// 	}
// 	else{
// 		alert("No tog'ri yozilgan");
// 	}
// }else if (userName == null){
// 	alert("Xech narsa yozilmagan");
// }
// else{
// 	alert("No tog'ri yozilgan");
// }


var per;
false || (per = 10);
console.log(per);

var per1  = "" || false || 0;
console.log(per1);


// Проверка if внутри диапазона
var dip = 15;
if(dip >= 14 && dip <= 90){
	console.log("chislo 14 dan katta va 90 dan kichkina: " + dip);
}else {
	console.log(dip);
}

var dip2 = 10;
if(!(dip2 >= 14 && dip2 <= 90)){
	console.log("chislo 14 bilan 90 ni ichinda mas");
}

var dip2 = 91;
if(dip2 <= 14 || dip2 >= 90){
	console.log("chislo 14 bilan 90 ni ichinda mas");
}












