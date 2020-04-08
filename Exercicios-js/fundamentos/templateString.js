const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!`

console.log(nome, template)

//Expressoes
console.log(`1 + 1 = ${1 + 1}`);

//Arrow
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)