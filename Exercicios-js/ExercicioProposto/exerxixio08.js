function teste (listString){
    let arrayListString = listString.split(' ')
    let arrayListInt = Number(arrayListString)
    let menorPontuacao = Math.min.apply(Math,arrayListString)

    console.log(arrayListString)
    console.log(arrayListInt)

}

teste("10 20 20 8 25 3 0 30 1")

const array = [10, 20, 30]
console.log(array)