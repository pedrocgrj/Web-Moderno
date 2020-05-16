const aprovados = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ //forEach passa 3 parâmetros: valor, indice e o proprio Array Obs.: Caso queira trabalhar com o indice é obrigado a passar 2 parâmetros
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)