const Discord = require ('discord.js-self');
const config = '../../../config.json';
const file = require(config);
const fs = require ('fs');


module.exports = {
    name: 'swaptoken',
    category: 'account',
    aliases: ['tokenchange', 'esci', 'logout'],
    descrizione: `ti permette di cambiare token per l'accesso al bot`,

    run: async (client, message, args) => {
       const token = " ";
       file.token = token;

        fs.writeFile('./config.json', JSON.stringify(file, null, 2), function writeJSON(err) {
            if (err) return console.log(err);
            console.log('\n\nhey! hai appena resettato il token!\nal prossimo accesso dovrai inserirne uno nuovo');
          })
          const embed = new Discord.MessageEmbed()
          .setColor('#FEE440')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic : true}))
          .setTitle(`☑ token cambiato!`)
          .setDescription('hai appena fatto lo swap del tuo token! \n\n🔹 **cosa accadrà?**\n\` 1 \` il tuo token verrà cancellato dal database del bot \n\` 2 \` il processo del bot verrà terminato in 5 secondi\n\` 3 \` al prossimo accesso dovrai di nuovo inserire un token\n\` 4 \` phsss! il token è conservato su config.json <3 in caso ti servisse')
          .setTimestamp()
          message.channel.send(embed)

          setTimeout(() => {process.exit(1)}, 5000)
          
    }
}