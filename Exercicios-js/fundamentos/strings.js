const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //Não dá erro e IndexInboundException
console.log(escola.charCodeAt(3))//Vamos na tabela Unicode
console.log(escola.indexOf('3'))//Retorna a posição do caractere

console.log(escola.substring(1))// partindo do index 1 pegue todos os caracteres
console.log(escola.substring(0,3))//Partindo do index 0 pegue 3 caracteres

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) //Replave aceita expressão regular

console.log('Ana,Maria,Pedro'.split(','))//Gera um array utilizando o separador , Obs.: Também aceita RegExp
