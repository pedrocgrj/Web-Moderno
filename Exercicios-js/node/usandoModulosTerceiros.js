//Intalado dependências -> npm i lodash && npm i -g nodemon
const _ = require('lodash')

setInterval(() => console.log(_.random(1, 10)), 2000)