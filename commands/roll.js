const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    min = 1
    let max = args[0]
    if(!max) {
        message.reply("Veuillez donner une valeur")
        return
    }
    if (parseFloat(max) != parseInt(max) && isNaN(max)) {
        return
    }
    let Nombre = `${message.author} a fait un roll sur une valeur de ${max} et a obtenu un `+ Math.floor(Math.random() * (max - min) + Math.ceil(min));
    message.channel.send(Nombre)

}

module.exports.help = {
    name: "roll"
}
