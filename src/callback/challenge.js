const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://api.escuelajs.co/api/v1' //En mayúsculas me dice que el valor no va a cambiar

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest() //Referencia a XMLHttpRequest

    xhttp.open('GET', urlApi, true) //Primer argumento: Tipo de solicitud
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState === 4) {
            /*
            0 - No inicializado
            1 - Cargando
            2 - Ya cargó
            3 - Trabajando con la solicitud
            4 - Llamada completada
            */            
            if (xhttp.status === 200) {
                /*
                Estado 200 = Respuesta correcta
                */
               callback(null, JSON.parse(xhttp.responseText))
            }else {
                const error = new Error('Error '+urlApi)
                   return callback(error,null)
               }
        } 
    }
    xhttp.send()
}


//Callback hell

fetchData(`${API}/products`, (error1,data1) => {
    if (error1) return console.error(error1)
    fetchData(`${API}/products/${data1[0].id}`, (error2,data2) => {
        if (error2) return console.error(error2)
        fetchData(`${API}/categories/${data2.category.id}`, (error3,data3) => {
            if (error3) return console.error(error3)
            console.log(data1[0])
            console.log(data2.title)
            console.log(data3.name)
        })
    })
})
