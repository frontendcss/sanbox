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

// var totalUsers = 0;
// for(var i = 0; i < mass.length; i++){
// 	totalUsers += mass[i];
// 	console.log(mass[i]);
// }

// console.log(totalUsers);

var catName = new Array('soart', 'limpus');
console.log(catName);

// Заполнение массивов значениями
var userName = [];
userName[0] = 'Soart';
userName[10] = 'Limpus';

var totalName = 0;
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
