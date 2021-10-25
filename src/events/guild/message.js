const { Message, MessageEmbed } = require('discord.js-self');
const ms = require ('ms');

module.exports = {
    name: 'message',
    run: async (client, message) => {
        
        //ottiene il contenuto del messaggio
        if(message.author.bot || !message.guild || !message.content.toLowerCase().startsWith("w!!")) return;
        const [cmd, ...args] = message.content.trim().slice("w!!".length).split(/ +/g);
        const command = client.commands.get(cmd.toLowerCase()) || client.commands.get(client.aliases.get(cmd.toLowerCase()));

        //controlla se quello inserito è un comando
        if(!command) return;

        //funzione cooldown
        if(client.cooldowns.has(`${message.author.id}-${command.name}`)) {
            return message.channel.send(`prova a usare questo comando in ${ms(client.cooldowns.get(`${message.author.id}-${command.name}`) - Date.now(), { long: true })}`)
        }

        //permission handler
        const embed = new MessageEmbed()
        .setColor('#FEE440')
        .setTitle('🚨 | ERRORE')
        if(!message.member.permissions.has(command.permessiUtente ?? [])) return embed.setDescription(`hai bisogno dei seguenti permessi per usare il comando: \n${command.permessiUtente.map((value) => `\`${value[0].toUpperCase() + value.slice(1).replace(/_/gi,' ')}\``).join(', ')}`), message.channel.send(embed);
        if(!message.guild.me.permissions.has(command.permessiBot ?? [])) return embed.setDescription(`ho bisogno dei seguenti permessi per usare il comando: \n${command.permessiBot.map((value) =>  `\`${value[0].toUpperCase() + value.slice(1).replace(/_/gi,' ')}\``).join(', ')}`),  message.channel.send(embed);
        
        //esecuzione comandi
        try {
            await command.run(client, message, args)
            if(command.cooldown) {
                client.cooldowns.set(`${message.author.id}-${command.name}`, Date.now() + command.cooldown);
                setTimeout(() => {
                    client.cooldowns.delete(`${message.author.id}-${command.name}`);
                }, command.cooldown);
            }
        } catch (err) {
            return console.log(`c'è stato un errore: ${err.message}`),
            message.channel.send(`c'è stato un errore nell'esecuzione del comando`)
        }
    }
};