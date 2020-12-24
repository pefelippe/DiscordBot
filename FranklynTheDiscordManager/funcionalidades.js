const cotacao = require("./cotacoes");

const bot = require("./bot");

const msg = require("./messages.json");

const DEFAULT_CLEAR_CHAT = 100;

const init = () => console.log("Bot Iniciado");

function limpar(message) {
  let numberMessages = parseInt(100);
  message.channel.messages
    .fetch({ limit: numberMessages })
    .then((messages) => message.channel.bulkDelete(messages))
    .catch((e) => console.log(e));
}

async function mensagem(message) {
  let daniele = message.content.startsWith("dani");
  let joao = message.content.startsWith("joao");
  let matheus = message.content.startsWith("matheus");
  let hacker = message.content.startsWith("hacker");

  let gado = message.content.startsWith("gado");
  let trabalho = message.content.startsWith("trabalho");

  if (message.author.equals(bot.user)) return;

  if (daniele) {
    message.channel.send(msg.deusa_elfica);
  }

  if (joao || gado) {
    message.channel.send(msg.gado);
  }

  if (matheus || hacker) {
    message.channel.send(msg.hacker);
  }

  if (trabalho) {
    message.channel.send(msg.trabalho_final);
  }
}

async function comandos(message) {
  let comando_checarComandos = message.content.startsWith("-comandos");
  let comando_limparChat = message.content.startsWith("-limpar");
  let comando_cotacaoMoedas = message.content === "-moedas";
  let comando_boasVindas = message.content === "-boasvindas";

  if (comando_checarComandos) {
    message.channel.send("Comandos Disponíveis:");
    message.channel.send(msg.comandos);
  }

  if (comando_limparChat) {
    limpar(message);
  }

  if (comando_cotacaoMoedas) {
    const cotacaoDolar = await cotacao.getDolar();
    message.channel.send("Cotação do Dólar");
    message.channel.send(`BRL: ${cotacaoDolar}`);
  }

  if (comando_boasVindas) {
    message.channel.send(
      `
	Bem vindo ao *** Computeiros™ ***
	
	Sou Dr. Franklyn, a mente genial que comanda este servidor. (Qualquer semelhança é mera coincidência com a realidade)
	
	Digite "-comandos" em algum dos canais de texto para conhecer meus comandos
	
	Repositório do Bot: ` + msg.botGit
    );
  }
}

exports.init = init;
exports.mensagem = mensagem;
exports.comandos = comandos;
