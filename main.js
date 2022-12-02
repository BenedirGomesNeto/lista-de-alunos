const Studients = [
    {
        name: "João",
        FirstTest: 4,
        SecondTest: 8,
    },

    {
        name: "Leticia",
        FirstTest: 10,
        SecondTest: 8.5,
    },

    {
        name: "Diego",
        FirstTest: 8,
        SecondTest: 10,
    },

    {
        name: "Julia",
        FirstTest: 4,
        SecondTest: 7.5,
    }
]

function Average(FirstTest, SecondTest){
    return((FirstTest + SecondTest) / 2).toFixed(1)
}
   
function printAverageStudient(Studient){
    if(Average(Studient.FirstTest, Studient.SecondTest) >= 7)
        return `
            A média do(a) aluno(a) ${Studient.name} é: ${Average(Studient.FirstTest, Studient.SecondTest)}
            Parabéns, ${Studient.name}! Você foi aprovado(a) no concurso!
        `
    else
        return `
            A média do(a) aluno(a) ${Studient.name} é: ${Average(Studient.FirstTest, Studient.SecondTest)}
            Não foi dessa vez, ${Studient.name}! Tente novamente!
        `
}

for(let Studient of Studients){
    let StudientAverageMessage = printAverageStudient(Studient)
    alert(StudientAverageMessage)
}
