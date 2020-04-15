// novo recurso do ES2015

const pessoa = {
    nome: 'Pedro',
    idade: 29,
    peso: 95,
    endereco: {
        logradouro: 'Rua bacana',
        numero: 126
    }
}

const {nome, idade} = pessoa //Tire do objeto os atributos nome, idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //Tire do objeto os atributos nome, idade
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //Permite atribuir valores padrão a atributos
console.log(sobrenome, bemHumorada)

const{endereco: {logradouro, numero, cep}} = pessoa //Extraindo atraibutos do endereço
console.log(logradouro, numero, cep)