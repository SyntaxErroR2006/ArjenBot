module.exports.run = async (client, message, args) => {

    return message.channel.send("Ping nu: " + (message.createdTimestamp - Date.now()) + " ms");

}

module.exports.help = {
    name: "ping"
}