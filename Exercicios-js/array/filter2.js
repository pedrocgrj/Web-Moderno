Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad pro', preco: 4199, fragil: true},
    {nome: 'Como de Vidro', preco: 12.49, fragil: true},
    {nome: 'Como de Plastico', preco: 18.99, fragil: false},
]

const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil

console.log(produto.filter2(produtoCaro).filter2(produtoFragil))