function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Estudando')
    .then(frase => frase.concat(' Promises!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))