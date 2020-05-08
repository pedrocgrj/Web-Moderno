const notas = [7.7, 8.8, 9.9, 3.6, 7.1, 9.0, 5.5]

//Sem CallBAck
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com CallBack
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//CallBack com Arrow
const notasBaixas3 = notas.filter(notas => notas > 7)
console.log(notasBaixas3)

//Sugestão do Instrutor
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)
