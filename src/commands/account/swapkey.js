const Discord = require ('discord.js-self');
const config = '../../../config.json';
var path = require('path')
const confapikey = path.join(__dirname, '../../../', '/node_modules/popyt/out/util/confapikey.json')
const apifile = require(confapikey);
const fs = require('fs')

module.exports = {
    name: 'swapkey',
    category: 'account',
    aliases: ['swapapikey', 'apikey', 'ytapikey'],
    descrizione: `ti permette di cambiare l'api key di youtube`,

    run: async (client, message, args) => {
        const apikey = " ";
        apifile.apikey = apikey;

        fs.writeFile(path.join(__dirname, '../../../', '/node_modules/popyt/out/util/confapikey.json'), JSON.stringify(apifile, null, 2), function writeJSON(err) {
            if (err) return console.log(err);
            console.log('\n\nhey! hai appena resettato la tua api key di youtube!\nal prossimo accesso dovrai inserirne una nuova');
          })
          const embed = new Discord.MessageEmbed()
          .setColor('#FEE440')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic : true}))
          .setTitle(`☑ api key cambiata!`)
          .setDescription('hai appena fatto lo swap della tua YTapikey! \n\n🔹 **cosa accadrà?**\n\` 1 \` la tua api key verrà cancellata dal database del bot \n\` 2 \` il processo del bot verrà terminato in 5 secondi\n\` 3 \` al prossimo accesso dovrai di nuovo inserire una apikey\n\` 4 \` phsss! il token è conservato su:\n\`/node_modules/popyt/out/util/confapikey.json\`\nin caso ti servisse <3')
          .setTimestamp()
          message.channel.send(embed)

          setTimeout(() => {process.exit(1)}, 5000)
          
    }
}