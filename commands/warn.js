const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    // -warn spelerNaam redenen hier.

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet gebruiken");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven");

    if (!args[1]) return message.reply("Geen redenen opgegeven");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    var warUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Gebruiker niet gevonden");

    if(warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry jij kan deze gebruiker niet warnen.");



    
}

module.exports.help = {
    name: "warn"
}