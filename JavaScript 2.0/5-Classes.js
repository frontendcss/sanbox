"use strict"
// «Классы» JavaScript
// class CollGuy {
// 	specialTrick = nothing;

// 	CoolGuy( trick ) {
// 	specialTrick = trick
// 	}

// 	showOff() {
// 	output( "Here's my trick: ", specialTrick )
// 	}
// }

// Конструктор

// Joe = new CoolGuy( "jumping rope" )
// Joe.showOff() // Here's my trick: jumping rope

// «Классы» Наследование

// class Vehicle {
// 		engines = 1
// 		ignition() {
// 			output( "Turning on my engine." );
// 		}
// 		drive() {
// 			ignition();
// 			output( "Steering and moving forward!" )
// 		}
// }

// class Car inherits Vehicle {
// 		wheels = 4
// 		drive() {
// 			inherited:drive() // Полиморфизм
// 			output( "Rolling on all ", wheels, " wheels!" )
// 		}
// }

// class SpeedBoat inherits Vehicle {
// 		engines = 2
// 		ignition() {
// 			output( "Turning on my ", engines, " engines." )
// 		}
// 		pilot() {
// 			inherited:drive() // Полиморфизм
// 			output( "Speeding through the water with ease!" )
// 		}
// }

// Примеси

// Явные примеси

// function extend(sorceObj, targetObj){
// 	for(let key in sorceObj){
// 		if(!(key in targetObj)){
// 			targetObj[key] = sorceObj[key];
// 		}
// 	}
// 	return targetObj;
// }

// let Vehicle = {
// 	engines: 1,
// 	limpus: "Sarvar", // kapiravat atilmidi carni ichinda limpus dagan svoystva bo
// 	ignition: function(){
// 		console.log("Turning on my engine.");
// 	},

// 	drive: function(){ // kaprat atilmidi drive bo carni ic
// 		this.ignition();
// 		console.log("Steering and moving forward!");
// 	}
// };

// let Car = extend(Vehicle, {
// 	wheels: 4,
// 	limpus: "Soart",
// 	drive: function(){
// 		Vehicle.drive.call(this);
// 		console.log("Rolling on all " + this.wheels + " wheels!")
// 	}
// });


// console.log(Car);

































