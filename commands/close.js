const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {
    
    const  categoryID = "734301058012020747";

    if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("Jij kan dit niet doen");

    if(message.channel.parentID == categoryID) { 
        message.channel.delete();
    } else {

        message.channel.send("Gelieve dit commando te doen bij een ticket!");

    }
    
}

module.exports.help = {
    name: "close"
}