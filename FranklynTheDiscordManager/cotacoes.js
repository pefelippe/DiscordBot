const links = require('./links.json')

const axios = require('axios')

const apiAdress = links["cot-api-url"]

var data
void async function(){
    data = await axios.get(apiAdress)
                .then(e => e.data.USD)
                .catch(e => console.log(e))
    console.log(data)
}


void function getDolar(){
    var dolar;

    console.log(data)
    //console.log(dolar)
    return data
}

//exports.getDolar = getDolar()