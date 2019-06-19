var obj = {
// Свойства: значение,
// Свойства: значение,
// Методы: function,
// Методы: function
}
// Точечная нотация
obj.soart = 10;
obj.limpus = 20;

var line = "family";
obj.line = 79868;

console.log(obj);

// Скобочная нотация
var obj1 = {}
var ComPus = "name"
obj1[ComPus] = 2324;

console.log(obj1);


// Удаление свойства
delete obj.limpus;
console.log(obj);


//Работа с методами
var methot = {
	soart: "Hello",
	comusp: function(param){
		console.log(this.soart, param);
	}
}

methot.comusp("Limpus");