// Эта строка кода не выполнится. Однострочный комментарий.

/*
Все эти строки кода не выполнятся.
Так как это многострочный комментарий.
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


// Сложные типы данных
console.log([50, 320, 480]);
console.log({meal: 'Завтрак', energy: 50});

// Переменные
// camelCase (верблюжья нотация) и snake_case (змеиная нотация)

var имяПеременной = 300;
console.log(имяПеременной);

/*
Во-первых, команда var для создания каждой переменной используется всего один раз.
Дальше вы обращаетесь к переменной по её имени, без var.
*/

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
console.log("" == false);

console.log(" ");

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

console.log(!!5); // to boolean
console.log(typeof(!!5));

console.log(3434 + ""); // to string
console.log(typeof(3434 + ""));

console.log(+"464");
console.log(typeof(+"464"));
console.log(+"" );
console.log(+true);
console.log(+false  );

var n = 4;
// n = null;

console.log(n.value)
console.log(typeof(n.value));





























