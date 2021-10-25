const { Util } = require('discord.js-self');
const Discord = require ('discord.js-self');
const { MessageEmbed } = require ('discord.js-self');

module.exports = {
    name: 'embedsay',
    category: 'fun',
    aliases: ['ripeti'],
    descrizione: 'ripete quello che dici',
    run: async(client, message, args) => {
        let msg = Util.cleanContent(args.join(" "), message);
        if(!args[0]) return message.channel.send('non hai inserito alcun messaggio da dire');
        if(msg.length >= 500) return message.delete(), message.channel.send('messaggio inserito più grande di 500 caratteri').then(msg => msg.delete({timeout: 5000}));
        const embed = new MessageEmbed()
        .setColor('#FEE440')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic : true}))
        .setDescription(msg)
        .setTimestamp()

        return message.delete(), message.channel.send(embed)
    }
}
