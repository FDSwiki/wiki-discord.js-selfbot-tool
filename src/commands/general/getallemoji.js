const Discord = require ('discord.js-self');
const fs = require('fs')
const fetch = require('node-fetch');
var zipper = require('zip-local');
const path = require('path');


module.exports = {
    name: 'getallemoji',
    category: 'general',
    aliases: [],
    descrizione: 'ottieni tutte le emoji di un server',
    run: async (client, message, args) => {
        
        var server = message.guild.id;
        const guild = client.guilds.cache.get(server)
        const filePath = `${guild.name}-emoji.zip`

        const emojiList = message.guild.emojis.cache.map(emoji => emoji.url);
        const emojiname = message.guild.emojis.cache.map(emojiname => emojiname.name);
        const emojianimated = message.guild.emojis.cache.map(emojiname => emojiname.animated);
        try {
        for (let i = emojiList.length-1; i >= 0; i--) {
        const nomeemoji = emojiname[i]
        const emojianimata = emojianimated[i]
        const response = await fetch(emojiList[i]);
        const buffer = await response.buffer();
        if (emojianimata == false) {
        fs.writeFile(`./src/commands/general/emoji/emoji${nomeemoji}.jpg`, buffer, () => 
        console.log(`${nomeemoji}.jpg scaricata con successo`));
        } else {
        fs.writeFile(`./src/commands/general/emoji/emoji${nomeemoji}.gif`, buffer, () => 
        console.log(`${nomeemoji}.gif scaricata con successo`));
        }
      }
        zipper.sync.zip("./src/commands/general/emoji/").compress().save(filePath);
        const embed = new Discord.MessageEmbed()
        .setColor('#FEE440')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('☑ GET ALL EMOJI')
        .setDescription('comando eseguito con successo!\necco il file con tutte le emoji del server')
        .setTimestamp()
        message.channel.send(embed)

        if (message.guild.me.hasPermission("ATTACH_FILES")) {
           //ha il permesso di inviare file
        message.channel.send({ files: [filePath] })
        setTimeout(() => {fs.unlinkSync(filePath)}, 5000)
        const directory = './src/commands/general/emoji/'
        setTimeout(() => {fs.readdir(directory, (err, files) => {
            if (err) throw err;
            for (const file of files) {
               fs.unlink(path.join(directory, file), err => {
                  if (err) throw err;
               });
            }
         })
        }, 5000)

      } else {
         //quando il bot non ha i permessi di inviare file
         
         //eliminazione delle emoji dalla cartella
         const directory = `./src/commands/general/emoji/`
         setTimeout(() => {fs.readdir(directory, (err, files) => {
            if (err) throw err;
            for (const file of files) {
               fs.unlink(path.join(directory, file), err => {
                  if (err) throw err;
               });
            }
         })
        }, 5000)
        //copia del file.zip nella cartella emoji
         setTimeout(() => {
            fs.copyFile(filePath,`./src/commands/general/emoji/${filePath}`, (err) => {
               if (err) 
                   throw err;
               console.log(`${filePath} copiato in ./src/commands/general/emoji/${filePath}`);
               message.channel.send(`\`purtroppo non ho il permesso di inviare file\nguarda la cartella della emoji ^^ \nla directory è specificata nel terminale\``)
           });
         }, 6000)
         //eliminazine del dummy file nella src
         setTimeout(() => {fs.unlinkSync(filePath)}, 7000)
      }



    } catch(error) {
      //in caso di un qualsiasi errore elimina tutto
        console.log(error)
        const directory = './src/commands/general/emoji/'
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
         
            for (const file of files) {
               fs.unlink(path.join(directory, file), err => {
                  if (err) throw err;
               });
            }
         })
         fs.unlinkSync(filePath)
        }
    }
}