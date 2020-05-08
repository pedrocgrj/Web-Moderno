const valor = 'Global'

function minhaFuncao(){
    //Neste ponto da função a const Local não está declarado
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()