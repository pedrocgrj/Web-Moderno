/*
*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: 
* console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no 
* lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. 
* Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/
function formatarReal(valor) {
    var formatado = "R$ " + valor.toFixed(2).replace(".",",");
    console.log(formatado)
}

console.log('Curso Web Moderno - Exercícios Javascript')
console.log('Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: \n'
            +'console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. \n'
            +'Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. \n'
            +'Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. \n'
            +'Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).')

formatarReal(0.300000004)
formatarReal(600000.00)