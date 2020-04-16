function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    throw {
        nome: erro.name
    }
}

function imprimirNomeGritaado(obg){
    try{
        console.log(obg.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('Finally')
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritaado(obj)