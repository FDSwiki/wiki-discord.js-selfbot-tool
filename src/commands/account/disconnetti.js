const Discord = require ('discord.js-self');

module.exports = {
    name: 'disconnetti',
    category: 'account',
    aliases: ['off'],
    descrizione: 'termina il processo del bot',

    run: async (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setColor('#FEE440')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic : true}))
        .setTitle(`☑ disconnessione effettuata!`)
        .setDescription('~wiki selfbot tool è stato disattivato :(')
        .setTimestamp()
        message.channel.send(embed)

        console.log('termino il processo su richiesta dell\'utente')
        setTimeout(() => {process.exit(1)}, 3000)
    }
}