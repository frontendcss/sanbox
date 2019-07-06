// Вообще, в массиве можно хранить любые данные: строки, булевы значения, числа и даже другие массивы.
// Рефакторинг это переписывание программы, после которого она должна работать так же, но быть более гибкой.

// Чтение из массива по индексу
var UserAll = [20000, 27000];
var allUser = UserAll[1];
console.log(allUser);

var mass = ['soart', 'limpus', 'web', 'sarvar'];

console.log(mass);
// console.log(mass[0]);
// console.log(mass[mass.length - 2]);

for(var i = 0; i < mass.length; i++){
	console.log(mass[i]);
}

var catName = new Array('soart', 'limpus');
console.log(catName);

// Заполнение массивов значениями
var userName = [];
userName[0] = 'Soart';
userName[10] = 'Limpus';

for (i = 0; i < userName.length; i++){
	console.log(userName[i]);
}

// Многомерные массивы
var bestAlbum = [["Hello", "World"]];
bestAlbum[0][2] = 'Soart';

// Доступ к элементном массива
console.log(bestAlbum[0][1]);
console.log(bestAlbum);

// Методы для работы с массивами
console.log(bestAlbum.join());
console.log(bestAlbum);


var mass = ["Soart", "Limpus", "CapSum"]
mass[3] = "Web";

console.log(mass);

var massNew = [
		"Soart",
		false,
		function(num){},
		{
			value: "Limpus"
		}
]

console.log(massNew[3]);

console.log("---");
// Методы pop/push, shift/unshift
// Конец массива
var fruits = ["Olma", "Anor", "Uzum"];
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

console.log("---");
console.log(fruits.push("Grusha", "Limon"));
console.log(fruits);

// Начало массива
console.log("---");
console.log(fruits.shift());
console.log(fruits.unshift("Kiwi", "banan"));
console.log(fruits);
















