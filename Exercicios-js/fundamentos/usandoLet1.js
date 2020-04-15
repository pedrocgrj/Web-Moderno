//Var tem escopo global e de função
//Let tem escopo Global, função e bloco
let numero = 1
{
    let numero = 2 //Let tem o escopo limitado a bloco.
    console.log('Dentro: ',numero)
}
console.log('Fora: ',numero)