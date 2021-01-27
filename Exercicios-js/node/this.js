console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

//Dentro de uma função o This não aponta para exports
function logThis(){
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()