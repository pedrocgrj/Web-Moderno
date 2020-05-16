//Object.preventExtensions Permite modificar objetos, excluir atributo mas não adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoçao'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal Não pode adicionar atributos, exlcuir mas pode modificar os atributos.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.seal(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze Não permite alterar atributos, excluir atributos ou criar novos (Literalmente Congelado)