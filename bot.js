const Discord = require('discord.js')
const config = require('./configs.json')
const funcionalidades = require('./funcionalidades')

const bot = new Discord.Client()

bot.login(config.token)

bot.on("ready", funcionalidades.init)
bot.on("message", async message => funcionalidades.mensagem(bot, message))