//pessoa: Endereço de memório -> 123 -> {objeto}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//Pessoa <- {objeto} <- endereço 456
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome= 'Maria' //Atribuição ignorada por causa do freeze
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)