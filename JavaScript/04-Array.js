// Вообще, в массиве можно хранить любые данные: строки, булевы значения, числа и даже другие массивы.
// Рефакторинг это переписывание программы, после которого она должна работать так же, но быть более гибкой.

// Чтение из массива по индексу
var UserAll = [20000, 27000];
var allUser = UserAll[1];
console.log(allUser);

var mass = ['soart', 'limpus', 'web', 'sarvar'];

console.log(mass);
// console.log(mass[0]);
console.log(mass[mass.length - 2]);

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
// Методы для работы с массивами
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

// Особенности работы length
var leng = [];
leng[10] = "dlina";

console.log(leng.length);

// Используем length для укорачивания массива
var lengUc = [1,2,3,4,5];
lengUc.length = 0;
console.log(lengUc);

// Метод Split
// позволяет превратить строку в массив
var str = 'a, b, d, v, t';
// var arr = str.split(', ', 2);
var arr = str.split(', ');

for(var i = 0; i < arr.length; i++){
	console.log(arr[i]);
}

// Метод join
var str = arr.join(';');
console.log(str);
console.log(typeof str);

// Удаление из массива
var delMass = ['a', 'b', 'd'];
delete delMass[0];
console.log(delMass);

// Метод splice
var delMassC = ["olma", "anor", "nok", "uzum"];
delMassC.splice(0,2, "Kiwi", "Klubnika");
console.log(delMassC);

// вставлять элементы без удаления
delMassC.splice(-1,0, "Avacoda");
console.log(delMassC);

// Метод slice
// Если вообще не указать аргументов – скопируется весь массив:
var arr = ["a", "b", "d", "v"];
var arr2 = arr.slice(0,2);
console.log(arr);
console.log(arr2);

// Сортировка, метод sort(fn)
function campareNumeric(a,b){
	if(a > b) return 1;
	if(a < b) return -1;
}

var arrSort = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
arrSort.sort(campareNumeric);
console.log(arrSort);

// Метод reverse
arrSort.reverse();
console.log(arrSort);

// Метод concat
var arrCancat = [0,1];
var arrCancatCopy = arrCancat.concat(2,3);
console.log(arrCancatCopy);

// indexOf/lastIndexOf
var arrIndexOf = [0, false, "index", "last"];
console.log(arrIndexOf.indexOf("last"));
console.log(arrIndexOf.lastIndexOf("last"));












