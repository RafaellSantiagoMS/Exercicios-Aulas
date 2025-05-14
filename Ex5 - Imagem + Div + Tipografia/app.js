 let alunos = ["Pedra","Papel", "Tesoura"]

 alunos.push = "Exodia"

//  let numeroAleatorio = Math.floor(Math.random() * alunos.length)
 console.log(alunos)

 console.log(alunos.indexOf("Papel"))
 console.log(alunos.includes("Exodia"))
 alunos.forEach(function(pegaNomes, index){
    console.log(pegaNomes.toLocaleUpperCase(),index)
 }
)

const alunosModificado = alunos.map(function(pegaNomes){
    console.log(pegaNomes + "lala" )
})