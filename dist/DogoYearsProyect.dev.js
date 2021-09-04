"use strict";

var myAge = 24; //mi edad actual

var earlyYears = 2; //años proveidos en tareas de proyecto.

earlyYears *= 10.5; //primero dos años en edad de perro

var laterYears = myAge - 2; //removemos los 2 primeros años en edad de perro

laterYears *= 4; //formula de edad de perro despues de los 2 primeros años;

var myAgeInDogYears = earlyYears + laterYears; //mi edad en edad de perro

var myName = 'Raysom Almanzar Ortega'.toLocaleLowerCase(); //guardo mi nombre en miniscula en variable

console.log("My name is ".concat(myName, ". I am ").concat(myAge, " years old in human years which is ").concat(myAgeInDogYears, " years old in dog years."));