let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { //Função Arrow é sempre anônima
    return 2 * a
}

dobro = a => 2 * a //Retorno implícito

console.log( dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
olá = _ => 'Olá' // Possui um parâmetro
console.log(ola())