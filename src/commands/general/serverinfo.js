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
    .addField("🔹 **Data creazione**", `Server creato il: **${message.guild.createdAt.toLocaleString()}**`)
    .addField("🔹 **Owner**", `L'owner del server è:  <@${message.guild.ownerID}>`)
    .addField("🔹 **Membri totali**", "Il server ha: ` " + `${message.guild.memberCount}` + " ` **Memberi**")
    .addField("🔹 **Emoji totali**", "Il server ha: ` " + `${message.guild.emojis.cache.size}` + " ` **Emoji**")
    .addField("🔹 **Canali totali**", "Il server ha: ` " + `${message.guild.channels.cache.size}` + " ` **Canali**")
    .addField("🔹 **Vanity Url**", "il server non ha un vanity url :/")
    message.channel.send(embedNoVanity)
    } else {
        const embed = new Discord.MessageEmbed()
        .setColor('#FEE440')
        .setTitle("informazioni server")
        .setThumbnail(ServerLogo)
        .setImage(ServerBanner)
        .setDescription(`nome server: **${message.guild}**`)
        .addField("🔹 **Data creazione**", `Server creato il: **${message.guild.createdAt.toLocaleString()}**`)
        .addField("🔹 **Owner**", `L'owner del server è:  <@${message.guild.ownerID}>`)
        .addField("🔹 **Membri totali**", "Il server ha: ` " + `${message.guild.memberCount}` + " ` **Membri**")
        .addField("🔹 **Emoji totali**", "Il server ha: ` " + `${message.guild.emojis.cache.size}` + " ` **Emoji**")
        .addField("🔹 **Canali totali**", "Il server ha: ` " + `${message.guild.channels.cache.size}` + " ` **Canali**")
        .addField("🔹 **Vanity Url**", `Il Vanity Url del server è: \` discord.gg/${vanity} \``)
        .setURL(`https://discord.gg/${vanity}`)
        message.channel.send(embed)
    }
    }
}



