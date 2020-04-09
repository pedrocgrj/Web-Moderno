const prod1 = {} //Construindo atributos dinamicamente
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço

console.log(prod1)

const prod2 = { //Objeto é uma coleção chave-valor
    nome: 'Camisa Polo',
    preco: 79.90,
}

'{"nome": "Camisa Polo", "Preco": 79.90}' //JSON é um formato textual

console.log(prod2)