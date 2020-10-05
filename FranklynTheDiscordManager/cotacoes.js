const links = require('./links.json')

const axios = require('axios')

const apiAdress = links["cot-api-url"]

async function getDolar() {
    let cotacaoDolar;
    await axios.get(apiAdress)
        .then(response => cotacaoDolar = response.data.USD.high)
        .catch(err => console.log('error', err))
    console.log('cotacaoDolar', cotacaoDolar)
    return cotacaoDolar
}

exports.getDolar = getDolar