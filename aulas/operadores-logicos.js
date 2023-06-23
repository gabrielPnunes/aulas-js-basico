// && é "e"
var idade = 20;
var maior20 = idade >= 20;
var menor30 = idade <=30;
var entre = maior20 && menor30;

console.log("idade", idade);
console.log("maior que vinte", maior20);
console.log("menor que trinta", menor30);
console.log("entre 20 e 30", entre);

// || é "ou"
var idade = 9;
var menor10 = idade <= 10;
var maior65 = idade >= 65;
var gratuidade = menor10 || maior65;

console.log("idade", idade);
console.log("menor que 10", menor10);
console.log("maior que 65", maior65);
console.log("tem direito a gratuidade", gratuidade);

// ! Negativo

var idade = 35;
var maior20 = idade >= 20;
var menor20 = !maior20;

console.log("maior que vinta", maior20);
console.log("menor que vinte", menor20);
console.log(!true);