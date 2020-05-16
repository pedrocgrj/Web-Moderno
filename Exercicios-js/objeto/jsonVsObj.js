const obj = {a: 1, b: 2, c:3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "String", "c": true, "d": {}, "e": []}'))//Atributos e textos devem estar entre áspas duplas