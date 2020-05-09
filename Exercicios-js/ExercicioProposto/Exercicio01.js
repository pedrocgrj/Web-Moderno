/* 
*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console: 
*soma, subtração, multiplicação e divisão desses valores. 
*/

function operacoesAritimeticas (valor1, valor2){
    let soma = valor1 + valor2
    let subtracao = valor1 - valor2
    let multiplicacao = valor1 * valor2
    let divisao = valor1 / valor2
    
    console.log('Curso Web Moderno - Exercícios Javascript')
    console.log('Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores.')
    console.log(`Soma: ${soma}\nSubração: ${subtracao}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao}`)   
}

operacoesAritimeticas(10, 2)