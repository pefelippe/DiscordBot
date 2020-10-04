const config = require('./configs.json')
const btc = require('btc-value')

btc.setApiKey(config.btc_api_key)

var bitcoin = btc({currencyCode: 'BRL'})


// dolar
//link https://economia.awesomeapi.com.br/all/USD-BRL


exports.bitcoin = bitcoin