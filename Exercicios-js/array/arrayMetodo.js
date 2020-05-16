const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo item da lista
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona ao vetor
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona no começo da lista
console.log(pilotos)

//Splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)//dado o indice 3 remove 1 item
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//Gera um novo array a partir do indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)//Gera um novo array a partir do indice até o ponto x (o indice 4 não será incluido)
console.log(algunsPilotos2)