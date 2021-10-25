const Discord = require ('discord.js-self');
const fs = require ('fs');



module.exports = {
    name: 'getalluserid',
    category: 'general',
    cooldown: 5000,
    descrizione: 'ti da la lista in un file txt di tutti gli utenti del server',

    run: async (client, message, args) => {

        var server = message.guild.id;
        const guild = client.guilds.cache.get(server)
        const filePath = `./src/commands/general/${guild.name}-alluserid.txt`; 
        const filename = `${guild.name}-alluserid.txt`

        const embed = new Discord.MessageEmbed()
        .setColor('#FEE440')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('☑ ALL USER ID')
        .setDescription('comando eseguito con successo!\nil file dovrebbe comparire qui sotto \n se il file non arriva purtroppo sei stato rait limitato. aspetta qualche ora e potrai rifarlo\n controlla il terminale <3')
        .setTimestamp()
        message.channel.send(embed)
    await message.guild.members.fetch().then(fetchedMembers => {
        
        const target_users = fetchedMembers
        target_users.forEach(user => {
                try {
                fs.appendFileSync(filePath, user.id+ '\n');
                }catch (error) {
                console.log(error);
                }
            })
            if (message.guild.me.hasPermission("ATTACH_FILES")) {
                //ha il permesso di inviare file
            message.channel.send("\`ecco la lista completa degli id ^^\`", { files: [filePath] });
            setTimeout(() => {fs.unlinkSync(filePath)}, 5000)
            } else {
                //non ha il permesso di inviare file

                //file esisteva già
                if (fs.existsSync(`./src/commands/general/alluserid/${filePath}`)) {
                    fs.unlinkSync(`./src/commands/general/alluserid/${filePath}`)
                    setTimeout(() => {
                        fs.copyFile(filePath,`./src/commands/general/alluserid/${guild.name}-alluserid.txt`, (err) => {
                           if (err) 
                               throw err;
                           console.log(`${filename} copiato in ./src/commands/general/alluserid/${guild.name}-alluserid.txt`);
                           message.channel.send(`\`purtroppo non ho il permesso di inviare file\nguarda la cartella 'alluserid' ^^ \nil file esisteva già, ma tranquillo, è stato aggiornato con i nuovi id!\``)
                       });
                     }, 3000)
                     setTimeout(() => {fs.unlinkSync(filePath)}, 5000) 
                } else {
                //file non presente nella cartella
                setTimeout(() => {
                    fs.copyFile(filePath,`./src/commands/general/alluserid/${guild.name}-alluserid.txt`, (err) => {
                       if (err) 
                           throw err;
                       console.log(`********\n*\n*${filename} copiato in ./src/commands/general/alluserid/${guild.name}-alluserid.txt\n*\n********`);
                       message.channel.send(`\`purtroppo non ho il permesso di inviare file\nguarda la cartella della emoji ^^ \nla directory è specificata nel terminale\``)
                   });
                 }, 3000)
                 setTimeout(() => {fs.unlinkSync(filePath)}, 5000)
                }
            }
        })
    }
}