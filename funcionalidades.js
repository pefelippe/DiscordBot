const links = require('./links.json')

const btc = require('btc-value')
bot.login(config.token)
btc.setApiKey(config.btc_api_key)

const init = () => console.log("Bot Iniciado")

function mensagem(bot, message){
  if(message.author.equals(bot.user)) return; // evitar loops

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
	
	responseObject = links;
	if(responseObject[message.content]){
		message.channel.send(responseObject[message.content])
	}

	if (message.content.startsWith("?comandos")){
		var resposta = `Comandos disponíveis: 
		?ola
		?lattes
		?disciplinas
		?comandos
		?limpar
										`;
		message.channel.send(resposta);							
	}

	if (message.content === '?hoje'){

		btcValue({currencyCode: 'BRL'}).then(value => {
			console.log(' BRL: ' + value);
	});
	}

	// Limpar Canal
	if (message.content.startsWith("?limpar")){
		msgDel = 100;
		let numberMessages = parseInt(msgDel)
		message.channel.messages.fetch({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages))
	}

}

exports.init = init
exports.mensagem = mensagem