const bot = require("./bot");
const auxiliar = require("./auxiliar");
const msgInteração = require("./jsons/msgInteracoes.json");
const msgAleatoria = require("./jsons/msgAleatoria.json");

const MIN_CHAT_CLEAR = 10;
const MAX_CHAT_CLEAR = 50;

const init = () => console.log("Bot Iniciado");

async function comandos(message) {
  let comando_checarComandos = message.content.startsWith("-comandos");
  let comando_limparChatMin = message.content.startsWith("-limparMin");
  let comando_limparChatMax = message.content.startsWith("-limparMax");
  let comando_cotacaoMoedas = message.content === "-dolar";
  let comando_boasVindas = message.content === "-boasvindas";

  if (comando_checarComandos) {
    message.channel.send("Comandos Disponíveis:");
    message.channel.send(msg.comandos);
  }

  if (comando_limparChatMin) {
    auxiliar.limpar(message, MIN_CHAT_CLEAR);
  }

  if (comando_limparChatMax) {
    auxiliar.limpar(message, MAX_CHAT_CLEAR);
  }

  if (comando_cotacaoMoedas) {
    auxiliar.printDolar(message);
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

async function mensagensInteracoes(message) {
  let daniele = message.content.startsWith("dani");
  let joao = message.content.startsWith("joao");
  let matheus = message.content.startsWith("matheus");
  let banido = message.content.includes("banido");

  if (message.author.equals(bot.user)) return;

  if (daniele) {
    message.channel.send(msgInteração.deusa_elfica);
  }

  if (joao) {
    message.channel.send(msgInteração.gado);
  }

  if (matheus) {
    message.channel.send(msgInteração.hacker);
  }

  if (banido) {
    message.channel.send(msgInteração.banido);
  }
}

async function mensagensAleatorias(message) {
  setTimeout(function () {
    console.log(msgAleatoria);
    // message.channel.send(msgAleatoria[0][0]);
  }, 0);
}

exports.init = init;
exports.comandos = comandos;
exports.mensagensInteracoes = mensagensInteracoes;
exports.mensagensAleatorias = mensagensAleatorias;
