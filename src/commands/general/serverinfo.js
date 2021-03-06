const Discord = require ('discord.js-self');

module.exports = {
    name: 'serverinfo',
    category: 'general',
    description: 'ti mostra tutte le informazioni sul server',

    run: async (client, message, args) => {

    const ServerLogo = message.guild.iconURL({ dynamic: true});
    const ServerBanner = message.guild.bannerURL({ dynamic: true, size: 512});
    const vanity = message.guild.vanityURLCode;
    if (!vanity) {
    const embedNoVanity = new Discord.MessageEmbed()
    .setColor('#FEE440')
    .setTitle("informazioni server")
    .setThumbnail(ServerLogo)
    .setImage(ServerBanner)
    .setDescription(`nome server: **${message.guild}**`)
    .addField("๐น **Data creazione**", `Server creato il: **${message.guild.createdAt.toLocaleString()}**`)
    .addField("๐น **Owner**", `L'owner del server รจ:  <@${message.guild.ownerID}>`)
    .addField("๐น **Membri totali**", "Il server ha: ` " + `${message.guild.memberCount}` + " ` **Memberi**")
    .addField("๐น **Emoji totali**", "Il server ha: ` " + `${message.guild.emojis.cache.size}` + " ` **Emoji**")
    .addField("๐น **Canali totali**", "Il server ha: ` " + `${message.guild.channels.cache.size}` + " ` **Canali**")
    .addField("๐น **Vanity Url**", "il server non ha un vanity url :/")
    message.channel.send(embedNoVanity)
    } else {
        const embed = new Discord.MessageEmbed()
        .setColor('#FEE440')
        .setTitle("informazioni server")
        .setThumbnail(ServerLogo)
        .setImage(ServerBanner)
        .setDescription(`nome server: **${message.guild}**`)
        .addField("๐น **Data creazione**", `Server creato il: **${message.guild.createdAt.toLocaleString()}**`)
        .addField("๐น **Owner**", `L'owner del server รจ:  <@${message.guild.ownerID}>`)
        .addField("๐น **Membri totali**", "Il server ha: ` " + `${message.guild.memberCount}` + " ` **Membri**")
        .addField("๐น **Emoji totali**", "Il server ha: ` " + `${message.guild.emojis.cache.size}` + " ` **Emoji**")
        .addField("๐น **Canali totali**", "Il server ha: ` " + `${message.guild.channels.cache.size}` + " ` **Canali**")
        .addField("๐น **Vanity Url**", `Il Vanity Url del server รจ: \` discord.gg/${vanity} \``)
        .setURL(`https://discord.gg/${vanity}`)
        message.channel.send(embed)
    }
    }
}



