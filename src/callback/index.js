//Clase 6

function sum(num1, num2){
    return num1+num2
}

function calc(num1,num2,callback){
    return callback(num1,num2)
}

console.log(calc(1,2,sum))



function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

setTimeout(function(){
    console.log('Hola')
},0)

console.log(calc(1,2,sum))

setTimeout(saludar,1,'pepito')

console.log(calc(1,2,sum))

console.log(calc(1,2,sum))

console.log(calc(1,2,sum))

console.log(calc(1,2,sum))