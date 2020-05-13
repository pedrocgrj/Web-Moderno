/*
* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
* primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
* retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capital, taxaJuros, tempo){
    let jurosConvertido = taxaJuros /100
    let simples = capital * jurosConvertido * tempo
    let formatadoSimples = "R$ " + simples.toFixed(2).replace(".",",");
    console.log(formatadoSimples)
}

function jurosComposto(capital, taxaJuros, tempo){
    let jurosConvertido = taxaJuros /100
    let composto = capital * Math.pow(1 + jurosConvertido,tempo)
    let formatadoComposto = "R$ " + composto.toFixed(2).replace(".",",");
    console.log(formatadoComposto)
}

console.log('Curso Web Moderno - Exercícios Javascript')
console.log('Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. \n'
            + 'A primeira função retornará o montante da aplicação financeira sob o regime de juros simples \n'
            + 'e a segunda retornará o valor da aplicação sob o regime de juros compostos.')

jurosSimples(1200,2,15)
jurosComposto(5000,1,6)