const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    var botEmbed = new discord.MessageEmbed()
        .setDescription(`Ticket is geclaimed door: ${message.author}, **NIET** Bemoeien!`)
        .setColor("#ff1100")

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "claim"
}