const ms = require ('ms');
const { MessageEmbed } = require ('discord.js-self');

module.exports = {
   name: 'musichelp',
   aliases: [],
   category: 'general',
   run: async (client, message, args) => {

       const embed = new MessageEmbed()
       embed.setTitle(`wiki selfbot tool v 1.0.0`)
       embed.setDescription('**Lista Comandi Della Musica** \n\n🔹**play**\n🔹**stop**\n🔹**now playing**\n🔹**skip**\n🔹**queue**\n🔹**volume**\n🔹**pause**\n🔹**remove**\n🔹**lyric**')
       embed.setColor('#FEE440')
       embed.setFooter(`~wiki selfbot tool <3`, `https://cdn.discordapp.com/avatars/363336856919736322/a_cc654088f52886cb0a59b809a36e7bff.gif?size=4096`)
       embed.setThumbnail('https://cdn.discordapp.com/attachments/778285091544760321/897189219917762600/kisspng-lidl-logo-retail-supermarket-toru-lidl-5b48ae1d554893.5991427415314898213493.png');

       message.channel.send(embed)
    }
}