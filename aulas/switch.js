var nota1 = 9;
var nota2 = 9;
var media = (nota1 + nota2) / 2;
var conceito = ""

if (media >= 9) {

    conceito = "exelente";

}

else if (media >= 7.5) {

    conceito = "bom";

}

else {

    conceito = "ruim";

}

console.log(media);
console.log(conceito);

switch (conceito) {
    case "exelente":
        console.log("Continue assim")
        break;
    case "bom":
        console.log("Melhore um pouco")
        break;
    case "ruim":
        console.log("Se esforce muito mais")
        break;
    default:
        console.log("erro")
}
