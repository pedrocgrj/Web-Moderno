console.log(soma(3,4))
// console.log(sub(3,4)) Aqui gera erro pois não está declarado

//Function Declaration (funções declaradas desta forma são carregadas primeiro pelo interpretador)
function soma(x, y){
    return x + y
}

//Function expression
const sub = function(x, y){
    return x - y
}

//Named function expression
const mult = function mult(x, y){
    return x * y
}

