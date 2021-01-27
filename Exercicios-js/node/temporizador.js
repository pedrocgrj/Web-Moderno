const schedule = require('node-schedule')

const tarefa = schedule.scheduleJob('*/5 * 9 * * 1', function(){ //Segundos em qualquer munito, às 8h, ignorar o dia do mês, ignorar o mês e o dia da semana começando por 0(Domingo)
    console.log('Executando Tarefa!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa.cancel()
    console.log('Cancelando tarefa 1!')
}, 10000)

const regra = new schedule.RecurrenceRule() //Regras de recorrencia
regra.dayOfWeek = [new schedule.Range(1, 5)] //Executar de segunda à sexta feira.
regra.hour = 9
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa2!', new Date().getSeconds())
})