const Discord = require('discord.js')

const bot = new Discord.Client()

const config = require('./config.js')

const funcionalidades = require('./funcionalidades')

bot.login(config.token)

bot.on("ready", funcionalidades.init)

bot.on("message", async message => funcionalidades.mensagem(message))

exports.bot = bot