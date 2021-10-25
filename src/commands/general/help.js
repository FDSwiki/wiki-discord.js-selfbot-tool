const ms = require ('ms');
const { MessageEmbed } = require ('discord.js-self');

module.exports = {
   name: 'help',
   aliases: ['info'],
   category: 'general',
   run: async (client, message, args) => {
       if(!args[0]) {
           const embed = new MessageEmbed();
           embed.setTitle(`wiki selfbot tool v 1.0.0`)
           embed.setDescription(`il selfbotting può risultare nella terminazione del tuo account <3 \nhave fun and enjoy your stay ^^ \n`+`
            ${[...client.categories]
            .map(
                (value) => 
            `🔹**${value[0].toUpperCase() + value.slice(1).toLowerCase()}** [ ${
                client.commands.filter(
                    (cmd) => cmd.category == value.toLowerCase()
                    ).size
                } ]\n${client.commands
                    .filter((cmd) => cmd.category == value.toLowerCase())
                    .map((value) => `\`${value.name}\``)
                    .join("\n")}`
                )
                .join("\n\n")}
           ` + `\n🔹**Per maggiori info su un comando** \n\`w!!help\` + \`nome comando\``)
           embed.setColor('#FEE440')
           embed.setFooter(`~wiki selfbot tool <3`, `https://cdn.discordapp.com/avatars/363336856919736322/a_cc654088f52886cb0a59b809a36e7bff.gif?size=4096`)
           embed.setThumbnail('https://cdn.discordapp.com/attachments/778285091544760321/897189219917762600/kisspng-lidl-logo-retail-supermarket-toru-lidl-5b48ae1d554893.5991427415314898213493.png');

           message.channel.send(embed);
       } else {
           const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()))
           if(!cmd) return message.channel.send('comando inserito inesistente');
           const embed = new MessageEmbed ();
           embed.setTitle(`🔹 ${cmd.name[0].toUpperCase() + cmd.name.slice(1).toLowerCase()}`);
           const properties = Object.entries(cmd);
           embed.setDescription(properties.filter((value) => typeof value[1] != "function").map((value) => {
               const key = value[0][0].toUpperCase() + value[0].slice(1).toLowerCase()
               if(typeof value[1] == "string") {
                   return `\`${key}\`: ${value[1]}`
               } else if(typeof value[1] == "number") {
                    return `\`${key}\`: ${ms(value[1], { long: true })}`
               } else if (typeof value[1].map == "function") {
                return `\`${key}\`: ${value[1].join(', ')}`
               } else {
                   return `\`${key}\`: ${value[1]}`
               }
           }))
           embed.setColor('#FEE440')
           embed.setThumbnail('https://cdn.discordapp.com/attachments/778285091544760321/897189219917762600/kisspng-lidl-logo-retail-supermarket-toru-lidl-5b48ae1d554893.5991427415314898213493.png');

           return message.channel.send(embed);
       }
    }
}


