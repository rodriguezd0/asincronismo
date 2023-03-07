const promise = new Promise(function(resolve,reject){
    resolve('hola')
})

const vacas = 90

const contarVacas = new Promise(function(resolve,reject){
    if (vacas>10){
        resolve(`Hay ${vacas} vacas`)
    } else {
        reject('No hay suficientes vacas')
    }
})

contarVacas.then((result) =>{
    console.log(result)
}).catch((error) =>{
    console.log(error)
}).finally(()=> console.log('FIN'))