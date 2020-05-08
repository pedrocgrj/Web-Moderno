function criarProdudo(nome, preco){
    return {
        nome, //pode omitir pois tem o mesmo nome recebido por parâmetro
        preco: preco,
        desconto: preco * 0.20

    }
}

console.log(criarProdudo('Prod1', 50))