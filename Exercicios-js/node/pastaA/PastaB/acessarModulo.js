const moduloA = require('../../moduloA')//Caminho Relativo
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC') //Busca por padrão o arquivo index, por isso não precisa especificar o nome
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom Dia!')
    res.end()
}).listen(8080)