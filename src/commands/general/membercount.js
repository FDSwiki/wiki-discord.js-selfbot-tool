const Discord = require ('discord.js-self');

module.exports = {
    name: 'membercount',
    category: 'general',
    aliases: ['membri', 'usertot'],
    descrizione: 'ti mostra un simpatico embed con il counter dei membri del server',
    run: async (client, message, args) => {
        var server = message.guild.id;
        const guild = client.guilds.cache.get(server)
        const membritot = guild.memberCount;
        const embed = new Discord.MessageEmbed()
        .setColor('#FEE440')
        .setTitle('🗣 membri totali')
        .setDescription(membritot)
        .setTimestamp()
        
        message.channel.send(embed)
    }
}