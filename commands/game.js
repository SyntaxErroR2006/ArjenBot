const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Game link!")
        .setURL("https://www.roblox.com/games/3586463976/Arjenstad-V2")
        .setDescription("Ooit al eens Arjenstad-V2 willen spelen? Pak nu je kans en join de game!")
        .setColor("#00add4");

    return message.channel.send(botEmbed);
    
}

module.exports.help = {
    name: "game"
}