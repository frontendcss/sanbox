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
console.log(typeof(5 + "5"));

console.log("5" * "4");
console.log(typeof("5" * "4"));

console.log("4" * "hi");
console.log(typeof("4" * "hi"));

console.log(" ");

console.log("5" == 5);
console.log("0" == false);
console.log("" == false);
console.log("4" == true);

console.log("");

console.log(null == false);
console.log(undefined == false);
console.log(undefined == null);

console.log(" ");

console.log(Number("55"));
console.log(typeof Number("55"));

console.log(String(7680));
console.log(typeof String(7680));

console.log(Boolean("1"));
console.log(typeof Boolean("1"));

console.log(parseInt("5.55", 10));
console.log(parseFloat("34.35 em"));

console.log(" ");

console.log(!!" ");
console.log(!!5); // to boolean
console.log(typeof(!!5));

console.log(3434 + ""); // to string
console.log(typeof(3434 + ""));

console.log(+"464"); // to number
console.log(typeof(+"464"));
console.log(+"" );
console.log(+true);
console.log(+false  );

var n = 4;
// n = null;

console.log(n.value)
console.log(typeof(n.value));

var test = 1 / 0;
var test2 = 1 / 'fgf';
console.log(typeof test);
console.log(typeof(test2));

console.log(typeof null);
console.log(typeof function(){});
// Сложные типы данных
console.log([50, 320, 480]);
console.log({meal: 'Завтрак', energy: 50});
console.log(typeof function(){});


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

// NaN (Not-A-Number)

var n = 0 / 0;
console.log(isNaN(n));

console.log("----");

console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));
console.log(isFinite(2));

console.log("----");
// Преобразование к числу
var nu = 34.45;
var su = "string"
console.log(+nu);
console.log(+su);
// Мягкое преобразование: parseInt и parseFloat
console.log(parseInt("12px"));
console.log(parseFloat("12.34.543"));
console.log(parseFloat("px34.454"));
console.log(parseInt("10", 16));

// toString(система счисления) Основание может быть любым от 2 до 36.

var numString = 4490640608799;
console.log(numString.toString(36));

// Округление

console.log(Math.floor(3.1)); // Округляет вниз
console.log(Math.ceil(3.1));  // Округляет вверх
console.log(Math.round(3.1)); // Округляет до ближайшего целого

// Округление идёт до ближайшего значения, аналогично Math.round и возвращает результат в виде строки:
var num2 = 34.34;
console.log(typeof +num2.toFixed(1));

console.log(0.1 + 0.2 == 0.3);

// Неточные вычисления
var num3 = 0.1 + 0.2;
console.log(+num3.toFixed(10));

// Форматирование
var number = 123456789;
console.log(number.toLocaleString());


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
console.log(strSybol.charAt(7)); // emty string
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


























