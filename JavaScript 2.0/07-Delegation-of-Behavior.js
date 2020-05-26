"use strict"

// Проектирование, ориентированное на делегирование
// Теория делегирования

let Task = {
	setID: function(ID){this.id = ID},
	outputID: function(){console.log(this.id)}
};

let XYZ = Object.create(Task);

XYZ.prepareTask = function(ID, Label){
	this.setID(ID);
	this.lable = Label;
}

XYZ.outputTaskDetails = function() {
	this.outputID();
	console.log(this.label);
};

console.log(XYZ);

