/*

Для проверки условий используют условный оператор if:
if (условие) {
	действия;
}

if (условие) {
	действия;
} else {
	другие действия;
}

Простые сравнения
больше» > и «меньше» <

Сравнения, допускающие равенство
больше или равно» >=
меньше или равно» <=

Равенство, неравенство

Оператор	Название	Действие
==  Нестрогое равенство (с приведением типов)	Сравнивает два значения, перед этим приводит одно из значений к типу другого. Если значения равны, возвращает true.
=== Строгое равенство (без приведения типов)	Сравнивает два значения. Если типы значений разные или значения не равны, возвращает false.
!=  Неравенство (с приведением типов)	Сравнивает два значения, перед этим приводит одно из значений к типу другого. Если значения не равны, возвращает true.
!== Строгое неравенство (без приведения типов)	Сравнивает два значения. Если типы значений разные или значения не равны, возвращает true.

*/


var olma = '2'; // String
var anor = 2;   // Number

if (olma === anor.toString()) {
	console.log('olma bilan anor dang');
}
else {
	console.log('dang amas');
}

console.log(typeof(anor));
/*
console.log('olma ' + typeof(olma));
console.log('anor ' + typeof(anor));
console.log('anor ' + typeof anor.toString());
*/

// Строгое сравнение чисел

var num = '1.88';

console.log('Строгое сравнение чисел: ' + typeof(num));
console.log('Строгое сравнение чисел: ' + typeof(parseInt(num, 16)));

// Вложенные условия
var enoughDevelopers = true;
var techAvailable = true;

var message = 'Нельзя приступать к проекту';

if(enoughDevelopers) {
	if(techAvailable) {
		message = 'Можно приступать к проекту';
	}
}
console.log(message);


/*
Логические операторы: &&, ||

Оператор &&, или «логическое И», возвращает true только в том случае, если оба условия, слева и справа от него, возвращают true
Оператор ||, или «логическое ИЛИ», возвращает true если любое из условий слева или справа от него, возвращают true.
*/

var enoughDevelopers = true;
var techAvailable = false;
var onVacation = false;
var onSickLeave = true;

if(enoughDevelopers && techAvailable) {
	console.log('Можно начинать проект');
}

if(onVacation || onSickLeave) {
	console.log('Лучше подождать');
}

// Логическое отрицание

var condition = false;
// var condition = true;

if (!condition) {
	console.log('код выполнится');
}else{
	console.log('код не выполнится');
}

var enoughDevelopers = true;
var techAvailable = true;
var onVacation = false;
var onSickLeave = false;

if (enoughDevelopers && techAvailable && !onVacation && !onSickLeave) {
	console.log('Можно начинать проект');
}else {
	console.log('Нельзя начинать проект');
}


var a = 0,
		MyNum = true;

MyNum && (a = 5);

console.log(a);



// В case могут быть любые выражения, в том числе включающие в себя переменные и функции.
// var x = 5;

// switch(x){
// 	case 1:
// 	console.log("1");
// 	break;

// 	case 2:
// 	console.log("2");
// 	break;

// 	case 3:
// 	console.log("3");
// 	break;

// 	default:
// 	console.log("Yech qaysi to'g'ri kelmadi");
// }

// Тип имеет значение
// var agr = prompt("Yoshingiz", "");
// switch(agr){
// 	case "0":
// 	case "1":
// 	console.log("0 yoki 1");
// 	break;

// 	case "2":
// 	console.log("2");
// 	break;

// 	case 3:
// 	console.log("3");
// 	break;

// 	default:
// 	console.log("Hech qaysi");
// }

// switch (browser) {
// 	case 'IE':
// 		alert( 'О, да у вас IE!' );
// 		break;

// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 		alert( 'Да, и эти браузеры мы поддерживаем' );
// 		break;

// 	default:
// 		alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }



// var agr = prompt("Sizda qasi browser o'rnatilgan?", "");

// if("IE" === agr){
// 	console.log("Xa sizda IE o'rnatilgan");
// }else if(agr === "chrome" ||
// 				 agr === "firefox" ||
// 				 agr === "safari" ||
// 				 agr === "opera"){
// 	console.log("Xa sizda chrome yoki firefox yoki safari yoki opera");
// }else{
// 	console.log("bitta xam browser to'g'ri kelmadi uzur");
// }
















