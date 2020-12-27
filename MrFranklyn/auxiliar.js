const axios = require("axios");

const links = require("./jsons/links.json");

const apiAdress = links["cot-api-url"];

async function getDolar() {
  let cotacaoDolar;
  await axios
    .get(apiAdress)
    .then((response) => (cotacaoDolar = response.data.USD.high))
    .catch((err) => console.log("error", err));
  console.log("cotacaoDolar", cotacaoDolar);
  return cotacaoDolar;
}

async function printDolar(message) {
  const cotacaoDolar = await getDolar();
  message.channel.send("Cotação do Dólar");
  message.channel.send(`BRL: ${cotacaoDolar}`);
}

function limpar(message, quantidade) {
  let numberMessages = parseInt(quantidade);
  message.channel.messages
    .fetch({ limit: numberMessages })
    .then((messages) => message.channel.bulkDelete(messages))
    .catch((e) => console.log(e));
}

exports.limpar = limpar;
exports.getDolar = getDolar;
exports.printDolar = printDolar;
