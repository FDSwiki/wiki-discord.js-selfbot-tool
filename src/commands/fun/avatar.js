const Discord = require ('discord.js-self');
const { MessageEmbed } = require ('discord.js-self');

module.exports = {
    name: 'avatar',
    category: 'fun',
    aliases: ['av', 'pfp'],
    descrizione: 'ti consente di visualizzare la pfp di un utente. purtroppo per un problema con le api di discord non potrai usare l\'id per trovare il target interessato se prima non l\'hai mai taggato',
    run: async(client, message, args) => {
        let user
        var reason
        
        var errore = new MessageEmbed()
        .setTitle('🚨 | ERRORE')
        .setColor('#FEE440')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic : true}))
        .setTimestamp()


        if(!args[0]) return reason = "devi inserire un utente da cui prelevare l'avatar", errore.setDescription(reason), message.channel.send(errore)

        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]);
            if(!user) return reason = `utente non trovato. le opzioni sono due: \n\n🔹hai inserito l'id di un utente che non esiste\n🔹l'uutente non è presente nella cache\n\`come risolvere:\`\ntaggare l'utente interessato e rifare il comando`, errore.setDescription(reason), message.channel.send(errore)
            let fetcheduser = client.users.fetch(user.id)
            fetcheduser.then(function(trueUser) {
            imgURL = trueUser.displayAvatarURL({dynamic : true, size: 2048})
            const Embed = new MessageEmbed()
            .setColor('#FEE440')
            .setAuthor(`${trueUser.tag}`)
            .setImage(imgURL);
            return message.channel.send(Embed);
            })
            return 
        }

        let avatar = user.displayAvatarURL(({dynamic : true, size: 2048}))

        
        if(user.avatarURL() == null) {
            let discriminator = user.discriminator
            let defaultavatar = discriminator.substr(discriminator.length -1)
                   if (defaultavatar == 5) {
                defaultavatar = 0
            } else if (defaultavatar == 6) {
                defaultavatar = 1
            } else if (defaultavatar == 7) {
                defaultavatar = 2
            } else if (defaultavatar == 8) {
                defaultavatar = 3
            } else if (defaultavatar == 9) {
                defaultavatar = 4
            }
            defaultavatar = `https://cdn.discordapp.com/embed/avatars/${defaultavatar}.png`
            const defaultavarEmbed = new MessageEmbed()
            .setColor('#FEE440')
            .setAuthor(`${user.tag}`)
            .setImage(defaultavatar);
            return message.channel.send(defaultavarEmbed);
        }
        
        const avatarEmbed = new MessageEmbed()
        .setColor('#FEE440')
        .setAuthor(`${user.tag}`)
        .setImage(avatar);
        message.channel.send(avatarEmbed);
    }
}