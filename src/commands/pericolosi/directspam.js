const { MessageEmbed } = require("discord.js-self");

module.exports = {
    name: 'directspam',
    category: 'pericolosi',
    aliases: ['dm', 'email'],
    descrizione: `invia un messaggio in dm all'utente selezionato \n\n🔹**come utilizzare il comando:** \n\`w!!directspam [tag] [numero di messaggi da inviare] [messaggio]\``,
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send('devi inserire un utente a cui mandare il messaggio');
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('nessun utente trovato');
        
        const embed = new MessageEmbed()
        .setTitle('🚨 | ERRORE')
        .setColor('#FEE440')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic : true}))
        .setDescription('formattazione del comando errata!\n\n🔹**come utilizzare il comando:** \n\`w!!directspam [tag] [numero di messaggi da inviare] [messaggio]\`')
        .setTimestamp()
        
        const reason = args.slice(2).join(' ');
        if (!reason)  return message.channel.send(embed);
        
        let valore = parseInt(args[1], 10)
        if (Number.isNaN(valore)) return message.channel.send(embed)
        for(let j = valore; j > 0; j--) {
            try {
                setTimeout(() => {user.send(reason)}, 3000);
            } catch {
                return  message.channel.send(`c'è stato un errore con l'invio del messaggio!`)
            }
        }

        message.channel.send('messaggi inviati con successo!')
    }
}