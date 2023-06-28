var alunos = ["Paulo", "Henrique", "Carlos", "Victor", "Eduardo", "Igor",
    "Joao", "Gabriel"]

for (var aluno of alunos) {
    console.log(aluno)
    console.log(alunos)
}

console.log("PROXIMO EXEMPLO")

for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
    console.log(i)
    console.log(alunos)
}

console.log("PROXIMO EXEMPLO")

for(var i in alunos){
    console.log(alunos[i])
    console.log(i)
    console.log(alunos)
}