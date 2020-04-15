//par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados em pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 29,
    peso: 95,
    endereco: {
        logradouro: 'Rua bacana',
        numero: 126
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)