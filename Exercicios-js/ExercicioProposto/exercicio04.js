/*
* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
*e o resto da divisão destes dois valores.
*/

function resultadoDivisao(dividendo, divisor){
    let resultDivisao = dividendo / divisor
    let restDivisao = dividendo % divisor

    console.log(`O resultado da divisão: ${resultDivisao} ||  resto: ${restDivisao}`)
}

console.log('Curso Web Moderno - Exercícios Javascript')
console.log('Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.')

resultadoDivisao(12, 5)