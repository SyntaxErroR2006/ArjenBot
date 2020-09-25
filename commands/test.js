
const discord = require('discord.js');
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    var botEmbed = new discord.MessageEmbed()
    .setTimestamp()  
    .setThumbnail(message.guild.iconURL({ format: 'png' }))
        .setDescription("**__help Information__**")
        .setColor("RANDOM")
        .addField('**General**', [
            `**-> Server Name:** ${message.guild.name}`,
            `**-> help :** Geef dit.`,
            `**-> serverinfo :** Dit is alle informatie wat u momenteel nodig heeft. `,
            `**-> new :** Dit is ons ticket systeem. `,
            `**-> Prefix:**`, botConfig.prefix,
            `**-> welkom :** Laat en welkom commando zien. dit word automatisch gedaan.`,
            `**-> ping :** Laat je ping zien.`,
            `**-> leden :** Laat alle leden zien.`,   
            `**-> game :** Laat de game link zien.`,          
            '\u200b'

        ])
        .addField('Moderation', [
            `**-> kick:** Dit is ons kick systeem `,
            `**-> ban :** Dit is ons ban systeem. `,
            `**-> close** Dit is ons close commando alleen toegankelijk voor tickets. `,
            `**-> warn:**  Dit ss de warn commando`,
            `**-> claim:**  Hiermee claim je een ticket.`,
            '\u200b'

        ])

    message.author.send(botEmbed);
    message.channel.send(" Al de commando's staan in je privé berichten! :mailbox_with_mail:");




}
module.exports.help = {
    name: "help"
}