require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' //Cuidado ao alterar escopo global

console.log(MinhaApp.nome)
