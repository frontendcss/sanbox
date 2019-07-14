
// DOM (Document Object Model — объектная модель документа)
// это интерфейс, посредством которого JavaScript работает с HTML-документами в окнах браузера.

// var myDom = document.body.childNodes[1].childNodes;
// for(var i = 0; i < myDom.length; i++){
// 	console.log(myDom[i]);
// }

// function fontStyle(){
// 	document.body.childNodes[1].firstChild.style.fontWeight="bold";
// 	document.body.childNodes[1].lastChild.style.fontWeight="bold";
// }

// fontStyle();

// Использование свойства и методы объекта document

// Свойства объекта Document
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentURI);
// console.log(document.domain);
// console.log(document.title);
// console.log(document.URL);

// Методы объекта document
// Выбор элементов с помощью метода getElementByld()

// function myAge(myName, myAge){
// 	document.getElementById('myName').innerHTML = myName;
// 	document.getElementById('myAge').innerHTML = myAge;
// }

// var myNamePop = prompt("Ismingiz", "");
// var myAgePop = prompt("Yoshingiz", "");
// myAge(myNamePop, myAgePop);

// Выбор и изменение элементов с помощью метода getElementsByTagName()
// Выбор и изменение элементов с помощью метода getElementsByClassName()
// function numberElements(tagName){
// 	var getTags = document.getElementsByTagName(tagName);
// 	for(var i = 0; i < getTags.length; i++){
// 		getTags[i].innerHTML = i+1;
// 	}
// }

// numberElements("h1");

// Использование метода document.createElement() для генерации таблицы из массива

// var elem = document.createElement("li");
// elem.className = "birinchiClass";
// elem.innerHTML = "JS Text";
// list.appendChild(elem);

// Следующий код вставляет новый элемент перед вторым <li>:
// var elem = document.createElement("li");
// elem.className = "ikkinchiClass";
// elem.innerHTML = "JS Text";
// // list.insertBefore(elem, list.children[1]);
// list.insertBefore(elem, list.firstChild);

// Добавим сообщение в конец <body>:
// var elem = document.createElement("div");
// elem.className = "alert";
// elem.innerHTML = "Hello JS"
// document.body.appendChild(elem);

// // Клонирование узлов: cloneNode
// var elem2 = elem.cloneNode(true);
// elem.parentNode.insertBefore(elem2, elem.nextSibling);

//Удаление элемента из документа

function reElement(){
	var delText = document.getElementById('deletText')
	delText.parentNode.removeChild(delText)
}


function getParent() {
  var y = document.getElementsByTagName("cite")[0];
  console.log(innerHTML = 'Родитель пункта списка: ' + y.parentNode.nodeName);
}








































