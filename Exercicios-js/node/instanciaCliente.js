const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) //O node faz cache de objetos aqui o contador B também foi incrementado

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor, contadorD.valor)
