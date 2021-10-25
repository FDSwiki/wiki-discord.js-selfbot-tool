const Discord = require ('discord.js-self');

module.exports = {
    name: 'ping',
    category: 'general',
    aliases: ['latenza'],
    cooldown: 3000,
    descrizione: 'pong!',
    run: async(client, message, args) => {
        const msg = await message.channel.send('caricamento...');
        await msg.edit(`WS ping: \`${client.ws.ping}\`MS \nping discord: \`${msg.createdTimestamp - message.createdTimestamp}\`MS`);
    }
}