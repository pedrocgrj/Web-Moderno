const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado, por ser fracamente tipado o JavaScript tenta comparar qualquer tipo de dado.