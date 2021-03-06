const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    const  categoryID = "734301058012020747"

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){
            ticketBestaat = true;

            message.reply("Je hebt al een ticket aangemaakt!");

            return;

        }
        
    });

    if(ticketBestaat) return; 

    var embed = new discord.MessageEmbed()
        .setTitle("Hallo! " + message.author.username)
        .setDescription(`Je ticket wordt aangemaakt`);

    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, {type: "text"}).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x =>x.name === '@everyone'),{
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x =>x.name === 'Support Team'),{
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hallo, ${message.author.username}`)
                        .setColor("#0082b5")
                        .setDescription("We willen graag direct je klachten/vragen horen, zodat een staff lid direct kan reageren en helpen! \n\n **----------------** \n Sollicitaties zijn momenteel **Gesloten**. in #berichten komt het wel te staan. \n **----------------** \n Komt een staff lid niet na 30min? Dan pas mag je ze **1** keer taggen. \n **----------------** \n\n Mvg, \n DevJS Support Team.");

                    settedParent.send(embedParent);




                }
            ).catch(err => {
                message.channel.send("Er is iets foutsgelopen");
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets foutsgelopen");
    });


}

module.exports.help = {
    name: "new"
}