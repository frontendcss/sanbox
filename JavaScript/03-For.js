var olma = 10;

for(var anor = 1; anor <= olma; anor = anor + 1) {
	console.log("Hello World!");
}

// Печатаем страницы в обратном порядке
var totalPages = 5;

for (var page = totalPages; page > 0; page = page - 1) {
	console.log("Печатаем страницы в обратном порядке");
}

/*
Печатаем только нечётные страницы

Инкремент (увеличение на единицу) i++ / i = i + 1
Декремент (уменьшение на единицу) i-- / i = i - 1
К-к-комбо!                     i += 2 / i = i + 2
Комбинировать можно не только сложение, но и остальные математические операции:
вычитание -=
умножение *=
деление /=
нахождение остатка %=
Например, i *= 10 будет аналогично i = i * 10.
*/

var totalPages = 12;

for (var page = 1; page <= totalPages; page += 2) {
	console.log("Печатаем только нечётные страницы");
}

var totalPages = 9;

for (var page = 2; page <= totalPages; page += 2) {
	console.log("Hello World!");
}

// Накопление в цикле

var sum = 0;

for(var i = 1; i <= 10; i++){
	sum += 2;
	console.log('Накопление в цикле');
}