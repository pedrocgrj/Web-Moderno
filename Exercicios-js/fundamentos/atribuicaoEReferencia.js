const a = {nome: "teste"}
const b = a //Atribuição por referência: b recebeu o endereço de memória de a, logo 'a' e 'b' são o mesmo objeto.
b.nome = 'Opa'
console.log(a)

//Valores básicos são atribuídos de forma independentes, não são referências. Atribuição por valor
let c = 3
let d = c
c++

console.log(c,d)