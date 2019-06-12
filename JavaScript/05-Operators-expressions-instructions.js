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
- Декремент
*/

// Строковый оператор конкатенации +

// Поразрядные операторы

// Специальные операторы
// Тернарный оператор

var riddit = 11;

var theme = (riddit > 10)?'riddit katta 10 dan':'riddit kichkina 10 dan';console.log(theme);
if(riddit > 10){console.log("riddit katta 10 dan");}else{console.log("riddit kichkina 10 dan");}


// Оператор запятая var а = 10, b = 0;
var them = (10, 15, 30);
console.log((them, "Hello"));



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

// var i = 0;
// var i  = 10;
var i;

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

for(i = 5; i--;){
	console.log(i);
}













