function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]
    return new Promise (resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        })
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 200),
        gerarNumerosEntre(1, 60, 300),
        gerarNumerosEntre(1, 60, 400),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 6000)
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then (console.log)
    .then(() =>{
        console.timeEnd('promise')
    })