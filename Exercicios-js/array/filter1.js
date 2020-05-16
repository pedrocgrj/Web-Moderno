const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad pro', preco: 4199, fragil: true},
    {nome: 'Como de Vidro', preco: 12.49, fragil: true},
    {nome: 'Como de Plastico', preco: 18.99, fragil: false},
]


console.log(produto.filter(function(p){
    return p.preco > 2500
}))

const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil

console.log(produto.filter(produtoCaro).filter(produtoFragil))