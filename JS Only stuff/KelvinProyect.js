//Kelvin Proyect
const kelvin = 293;
//valor constante de grados kelvin, hoy 

var celsius = kelvin - 273;
//valor de grados celsius de temperatura de hoy

var fahrenheit = Math.floor(celsius*(9/5)+32);
//valor de grados fahrenheit, convertidos desde celsius

fahrenheit = Math.floor(fahrenheit);
// Truncado de valor para remover decimales

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);