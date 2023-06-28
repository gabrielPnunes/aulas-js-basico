var nomes = ["Igor", "Joao", "Jose"];
var notaA = [7.5, 6.0, 7.0];
var notaB = [8.5, 7.0, 7.0];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(media) {
    if (media >= 7) {
        return "aprovado";
    } else {
        return "reprovado";
    }
}

for (var index in nomes) {

    var nota1 = notaA[index];
    var nota2 = notaB[index];
    var m = media(nota1, nota2);

    console.log(nomes[index] +
        " - " +
        nota1 +
        " - " +
        nota2 +
        " - " +
        m +
        " - " +
        passou(m));

}