const sequencia = {
    _valor: 1, // Convenção para dizer que o atributo tem a intenção de ser privado
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor) 
            this._valor = valor 
        } //Obs: JS não suporta Sobrecarga de métodos, exceto para Get/Set
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
