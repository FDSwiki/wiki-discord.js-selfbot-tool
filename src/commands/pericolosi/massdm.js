const Discord = require ('discord.js-self');

module.exports = {
    name: 'massdm',
    category: 'pericolosi',
    descrption: 'serve davvero?',

    run: async (client, message, args) => {

        let contatore = 0;

        var server = message.guild.id;                                  //ottenere membri totali del server
        const guild = client.guilds.cache.get(server);
        const messaggio = 'messaggio da inviare in dm';

        try {
            message.delete();
            const msg = await message.channel.send('mass dm process iniziato!').then(msg => {msg.delete({ timeout: 3000})});
            await message.guild.members.fetch().then(fetchedMembers => {
                const target_users = fetchedMembers
                target_users.forEach(user => {
                    if(!user) return console.log('nessun utente trovato');
                    try {
                        user.send(messaggio);
                        contatore++;
                        return console.log(`${user.id} | contattato! | dm inviati: ${contatore} | nickname: ${user.displayName}`)
                    } catch {
                        return console.log(`${user.id} ha i dm chiusi :( | nickname: ${user.displayName})`);
                    }
                })
            })
        }catch(error) {
        console.log(error)
        }
    }
}