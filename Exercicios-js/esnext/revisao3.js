//ESB: Object.values/Object.entries

const obj = {a: 1, b:2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi galera'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class - Internamente é convertida em uma função
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())