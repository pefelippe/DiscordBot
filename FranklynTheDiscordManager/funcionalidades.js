
const cotacao = require('./cotacoes')

const bot = require('./bot')

const msg = require('./messages.json')

const DEFAULT_CLEAR_CHAT = 100

const init = () => console.log("Bot Iniciado")

function mensagem(message) {

  	if(message.author.equals(bot.user)) return; 

  // Interações
	if (message.content.startsWith('dani')) {
		message.channel.send(msg.deusa_elfica);
  	}
  
  	if (message.content.startsWith('joao') || message.content.startsWith('gado')) {
		message.channel.send(msg.gado)
	}

	if (message.content.startsWith('matheus') || message.content.startsWith('hacker')) {
		message.channel.send(msg.hacker)
  	}
	
	/* pegar respostas do json
	responseObject = links;
	if(responseObject[message.content]) {
		message.channel.send(responseObject[message.content])
	}*/

	if (message.content.startsWith("-comandos")) {
		message.channel.send("Comandos Disponíveis:")
		message.channel.send(msg.comandos);							
	}

	if (message.content === '-moedas') {
		message.channel.send("Cotação do Dólar")
		//message.channel.send('BRL: ' + cotacao.getDolar())
	}

	if (message.content === '-boasvindas') {
		message.channel.send(`
Bem vindo ao *** Computeiros™ ***

Sou Dr. Franklyn, a mente genial que comanda este servidor. (Qualquer semelhança é mera coincidência com a realidade)

Digite 'comandos?' em algum dos canais de texto para conhecer meus comandos [EM DESENVOLVIMENTO]

Repositório do Bot: ` + msg.botGit)
}

	if (message.content.startsWith("-limpar")) {
		limpar(message)
	}
}

function limpar(message){
	let numberMessages = parseInt(100)
	message.channel.messages.fetch({limit: numberMessages})
	.then(messages => message.channel.bulkDelete(messages))
	.catch(e => console.log(e))
}

exports.init = init
exports.mensagem = mensagem