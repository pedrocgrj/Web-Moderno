const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar();

const falar = pessoa.falar //Aqui o falar está em outro contexto
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // O Bind anexa o objeto a ser referenciado pelo this
falarDePessoa()

const falar2 = pessoa.falar 
falar2()