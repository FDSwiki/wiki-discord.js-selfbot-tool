const { MessageEmbed } = require("discord.js-self");

module.exports = {
    name: 'spam',
    category: 'pericolosi',
    aliases: ['dm', 'email'],
    descrizione: `spamma il messaggio scritto in chat \n\n🔹**come utilizzare il comando:** \n\`w!!spam [numero di messaggi da inviare] [messaggio]\``,
    run: async(client, message, args) => {
        message.delete()
        const embed = new MessageEmbed()
        .setTitle('🚨 | ERRORE')
        .setColor('#FEE440')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic : true}))
        .setDescription('non hai messo quanti messaggi spammare o non hai inserito alcun messaggio\n\n🔹**come utilizzare il comando:** \n\`w!!directspam [numero di messaggi da inviare] [messaggio]\`')
        .setTimestamp()
        if(!args[0]) return message.channel.send(embed);
        const reason = args.slice(1).join(' ');
        if (!reason)  return message.channel.send(embed);
        let valore = parseInt(args[0], 10)

        if (Number.isNaN(valore)) return message.channel.send(embed)
        for(let j = valore; j > 0; j--) {
            try {
                message.channel.send(reason);
            } catch {
                return message.channel.send(`c'è stato un errore con l'invio del messaggio!`);
            }
        }
    }
}