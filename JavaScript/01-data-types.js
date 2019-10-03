// Эта строка кода не выполнится. Однострочный комментарий.

/*
Все эти строки кода не выполнятся.
Так как это многострочный комментарий.
*/

// Переменные
// camelCase (верблюжья нотация) и snake_case (змеиная нотация)

/*
Во-первых, команда var для создания каждой переменной используется всего один раз.
Дальше вы обращаетесь к переменной по её имени, без var.
*/

// 50 * (42 / 100); Инструкция

// Типы данных
// Примитивные типы данных

var AgeLore;

// Вывод в консоль
console.log(100); // Number
console.log(1.5); // Number
console.log('Hello, World'); // String
console.log(true); // Boolean
console.log('Hello, World' - 2); // NaN
console.log(AgeLore); // undefined
console.log(NaN  === NaN);
console.log(0.2 + 0.1);

console.log(" ");

console.log(5 + "5");
console.log(typeof(5 + "5")); // string

console.log("5" * "4");
console.log(typeof("5" * "4")); // number

console.log("4" * "hi"); // NaN
console.log(t
ypeof("4" * "hi")); // number

console.log(" ");

console.log("5" == 5); // true
console.log("0" == false); // true
console.log("" == false); // true
console.log("4" == true); // false

console.log("");

console.log(null == false); // false
console.log(undefined == false); // false
console.log(undefined == null); // true

console.log(" ");

console.log(Number("55"));
console.log(typeof Number("55")); // number

console.log(String(7680));
console.log(typeof String(7680)); // string

console.log(Boolean("1"));
console.log(typeof Boolean("1")); // boolean

console.log(parseInt("5.55", 10)); // возвращает целое число или значение NaN
console.log(parseFloat("34.35 px")); // Если первый символ не может быть сконвертирован в число, то возвращается NaN

console.log(" ");

console.log(!!" "); // true
console.log(!!5); // to boolean
console.log(typeof(!!5)); // boolean

console.log(3434 + ""); // to string
console.log(typeof(3434 + "")); // string

console.log(+"464"); // to number
console.log(typeof(+"464")); // number
console.log(+"" ); // 0
console.log(+true); // 1
console.log(+false); // 0

console.log(typeof null); // object
console.log(typeof function(){}); // function

// Сложные типы данных
console.log([50, 320, 480]);
console.log({meal: 'Завтрак', energy: 50});

// Операции
50 + 100;
+1

/*
Операция сложения — бинарная, так как в ней два операнда. Бинарные операции самые распространённые.
Но существуют и унарные операции, с одним операндом, и тернарные операции, с тремя операндами.
*/

/*
Из-за того, что JavaScript умеет изменять тип операндов на лету,
он называется языком с динамическим приведением типов.
*/

// Числа

console.log(0xFF); // в шестнадцатиричной системе
console.log(3e-5); // здесь 3 сдвинуто 5 раз вправо, за десятичную точку. <- запись с плавающей точкой
console.log(1e500); // Infinity
console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity
console.log(Infinity > 945984503); // true
console.log(Infinity + 5 === Infinity); // true
console.log(-Infinity === Infinity); // false

// специальные числовые значения
// Infinity, -Infinity и NaN

// NaN (Not-A-Number)

var n = 0 / 0;
console.log(isNaN(n));

var x = NaN;
console.log(x != x);
console.log(x !== x);

console.log("----");

console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));
console.log(isFinite(0));

console.log("----");
// Преобразование к числу
var nu = "34.45";
var su = "string";
console.log(+nu);
console.log(+su);

// Мягкое преобразование: parseInt и parseFloat
console.log(parseInt("12px")); // 12
console.log(parseFloat("12.34.543")); // 12.34
console.log(parseFloat("px34.454")); // NaN
console.log(parseInt("10", 16)); // 16

// toString(система счисления) Основание может быть любым от 2 до 36.

var numString = 4490640608799;
console.log(numString.toString(36)); // 1layzh1r3

// Округление

console.log(Math.floor(3.1)); // Округляет вниз 3
console.log(Math.ceil(3.1));  // Округляет вверх 4
console.log(Math.round(3.1)); // Округляет до ближайшего целого 3

// Округление идёт до ближайшего значения, аналогично Math.round и возвращает результат в виде строки:
var num2 = 34.34;
console.log(num2.toFixed(1)); // 34.3

console.log(0.1 + 0.2 == 0.3); // false

// Неточные вычисления
var num3 = 0.1 + 0.2;
console.log(+num3.toFixed(10)); // 0.3

// Форматирование
var number = 123456789;
console.log(number.toLocaleString()); // 123 456 789


// Строки

// перевод строки
console.log("Type\nstring");
console.log("Type\tstring");
console.log("Copyright\u00A9");

// Экранирование специальных символов
console.log("Hello, wo\"rld");

// Методы и свойства
var str = "Soa\rt";
console.log(str.length);

// Доступ к символам
var strSybol = "JQuery"; // 6
console.log(strSybol.charAt(5)); // emty string
console.log(strSybol[7]); // undefined

// Смена регистра
var strRegister = "Soart";
console.log(strRegister.toUpperCase());
console.log(strRegister.toLowerCase());
console.log(strRegister[0].toUpperCase());

// Поиск подстроки
var search = "html, Css, JavaScript, Node.js, MySql, Ruby, php, Go, Swift, Java, C, C++, C#";
console.log(search.indexOf("Java", 15));

if(~search.indexOf("JavaScript")){
	console.log("Topildi!!!");
}else{
	console.log("Topilmadi");
}

// Взятие подстроки: substring, substr, slice

// substring(start [, end])
var strSub = "Hello, World";
console.log(strSub.substring(4,9));
console.log(strSub.substr(4,9));
console.log(strSub.slice(4,9));

// Кодировка Юникод
console.log(String.fromCharCode(98));

var str = "н";
console.log(str.charCodeAt());

console.log("L" < "U");
// code L -> 76
// code U -> 85

console.log(" ");






// Переменные
console.log("New JavaScript");

let newVariable = "Hello, World"
console.log(newVariable);

let newVariable2 = "HTML", newVariable3 = "CSS", newVariable4 = "JavaScript";
console.log(newVariable4);

// Константы
const BIRTHDAY = "16.05.1993";
console.log(BIRTHDAY);

const age = 26;
console.log(age);

// В JavaScript существует три типа кавычек.
let varib = 2+3;
console.log(`Num: ${varib}`);

/*
В JavaScript есть 7 основных типов.

number для любых чисел: целочисленных или чисел с плавающей точкой.
string для строк. Строка может содержать один или больше символов, нет отдельного символьного типа.
boolean для true/false.
null для неизвестных значений – отдельный тип, имеющий одно значение null.
undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
object для более сложных структур данных.
symbol для уникальных идентификаторов.
*/


// Операторы

/* Приоритет операторов
В JavaScript много операторов. Каждый оператор имеет соответствующий номер приоритета.
Тот, у кого это число больше – выполнится раньше. Если приоритет одинаковый,
то порядок выполнения – слева направо.
*/


console.log("Возведение в степень");
console.log(2 ** 3); // 2 * 2 * 2 // 8

console.log("Инкремент/декремент");

// «постфиксная форма»: counter++
let icr = 1;
let result  = icr++;
console.log(result);

// «Префиксная форма» ++counter
let icr2 = 1;
let result2  = ++icr2;
console.log(result2);











