const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    var botEmbed = new discord.MessageEmbed()
        .setDescription()
        .setColor("#ff1100")

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "profielfoto"
}