//Variáveis declarados com o 'var' sofre o efeito de Hoisting, seu declaração é 'içada' para o começo do arquivo, em outras palavras: var = a 
console.log('a = ', a)
var a = 2
console.log('a = ', a)

console.log('b= ', b) //O let não sofre o efeito do Hoisting, gerando um erro nesta linha.
let b = 2
console.log('b= ', b)