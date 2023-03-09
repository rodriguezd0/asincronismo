import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method:'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response
}

const data = {
    "title": "Nuevo producto!",
    "price": 31415,
    "description":"Creando un nuevo producto con POST",
    "categoryId":1,
    "images":["https://scontent.fxry1-2.fna.fbcdn.net/v/t1.6435-9/107901664_121171546338132_7452247514602964823_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bcckEzDaqK4AX-V2F79&_nc_ht=scontent.fxry1-2.fna&oh=00_AfD2m84Ucw4lvMQRYYnxtekEMNVNjpd8FZnT2Bv56EBn4Q&oe=64308EB9"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));