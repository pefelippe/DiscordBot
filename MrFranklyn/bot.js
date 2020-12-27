const Discord = require("discord.js");

const bot = new Discord.Client();

const config = require("./configs/config.js");

const funcionalidades = require("./funcionalidades");

bot.login(config.token);
bot.on("ready", funcionalidades.init);
bot.on("message", async (comandos) => funcionalidades.comandos(comandos));
bot.on("message", async (message) => funcionalidades.mensagensInteracoes(message));
bot.on("message",  async (message) => (funcionalidades.mensagensAleatorias(message)));

exports.bot = bot;
