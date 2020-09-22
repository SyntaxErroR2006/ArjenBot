const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    try{

        var text = "**ArjenBot** \n\n **__Commands__** \n -info - Geeft dit scherm. \n -new - Maakt een ticket. \n -serverinfo - Geeft info over de server. \n -leden - Geeft weer hoeveel leden/bots er zijn. \n -ping - Geeft weer hoeveel ping je hebt. \n -game - Geeft de game link. \n\n  **__Staff Commands__** \n -training - Hiermee kan je een training inplannen. \n -ban - Hiermee kan je iemand bannen.\n -kick - Kickt een speler. \n -close - Closed een ticket. \n -claim - Je claimed een ticket. \n -clear - Je verwijderd tekst \n -giveaway je start een giveaway."
        
        message.author.send(text);

        message.reply("Alle commands vind je in je prive berichten! 📬")

    }catch(error){
        message.reply("Er is iets foutsgelopen");
    }
    
}

module.exports.help = {
    name: "info"
}