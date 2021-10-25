const Discord = require ('discord.js-self');

module.exports = {
    name: 'countervc',
    category: 'general',
    aliases: ['vc', 'membrivc', 'uservc'],
    descrizione: 'ti dice quanti utenti sono in vc nei canali che puoi vedere',
    run: async (client, message, args) => {
        const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;

        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        const embed = new Discord.MessageEmbed()
        .setColor('#FEE440')
        .setTitle('🗣 utenti in vc')
        .setDescription(count)
        .setTimestamp()
        
        message.channel.send(embed)
    }
}