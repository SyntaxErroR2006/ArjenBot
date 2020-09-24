const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setTitle("ArjenBot Help Menu")
    .setThumbnail("https://cdn.discordapp.com/attachments/746412646206537788/757650423363665960/JustArjxn_Logo.png")
    .setFooter("Mady by SyntaxErroR#0001", "https://cdn.discordapp.com/attachments/746412646206537788/757650423363665960/JustArjxn_Logo.png")
    .addFields(
        { name: "💡Openbaar", value: "`-help\n-serverinfo\n-leden\n-ping\n-game`" },
        { name: "📌Moderatie", value: "`-ban\n-kick\n-giveaway\n-clear`" },
        { name: ":pencil:Tickets", value: "`-new\n-close\n-claim`" },
        { name: ":gear:Setup", value: "`SOON`" }
    )
    message.channel.send(embed);

}

module.exports.help = {
    name: "help"
}    