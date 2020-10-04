
const cotacao = require('./cotacoes')

const bot = require('./bot')

const init = () => console.log("Bot Iniciado")

function mensagem(message) {
	
  if(message.author.equals(bot.user)) return; 

  // Interações
	if (message.content.startsWith('dani')) {
		message.channel.send('Chamando Deusa élfica. :thumbsup: ');
  }
  
  if(message.content.startsWith('joao')){
		message.channel.send("CHAMANDO O GADO DA DANIELEKKKKKKKKKKKKKKKKKKKKKKKK :cow:")
	}

	if(message.content.startsWith('matheus')){
		message.channel.send("Alguém viu alguma pessoinha de humanas? :cow:")
  }

  // if(message.content.startsWith('leo')){
	// 	message.channel.send("")
  // }

  // if(message.content.startsWith('ppp')){
	// 	message.channel.send("")
  // }

  // if(message.content.startsWith('lucas souza')){
	// 	message.channel.send("")
  // }
	
	/* pegar respostas do json
	responseObject = links;
	if(responseObject[message.content]) {
		message.channel.send(responseObject[message.content])
	}*/

	if (message.content.startsWith("comandos?")) {
		var resposta = `Comandos disponíveis: 
		?ola
		?lattes
		?disciplinas
		?comandos
		?limpar
		`;

		message.channel.send(resposta);							
	}

	if (message.content === 'cotacao?'){

		message.channel.send("Cotação do Dólar")
		message.channel.send('BRL: ' + cotacao.dolar)
	}

	if (message.content === ("limpar chat!")) {
		limpar(message)
	}

}

function limpar(message){
	let numberMessages = parseInt(1000)
	message.channel.messages.fetch({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages))
}


exports.init = init
exports.mensagem = mensagem