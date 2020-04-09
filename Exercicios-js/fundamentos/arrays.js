const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[10] = 10
console.log(valores) //É possível pular posições do array ao realizar atribuições, resultado: [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 10 ]
console.log(valores.length)

valores.push({Id: 3}, false, null, 'teste')//Podemos misturar tipos diferentes de dados, não é uma boa prática
console.log(valores)

console.log(valores.pop())
delete valores[0]

console.log(valores)

console.log(typeof valores)