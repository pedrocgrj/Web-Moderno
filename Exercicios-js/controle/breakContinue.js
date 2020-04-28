const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if (x == 5){
        break //Interrompe o laço de repetição mais próximo
    }

    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        continue //Interrompe a execução que atende a condição e pula para a próxima
    }

    console.log(`${y} = ${nums[y]}`)
}

externo: for (let a in nums){ //Não utilizar código mararrão
    for (let b in nums){
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}