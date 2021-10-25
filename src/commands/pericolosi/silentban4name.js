const { JSDOM } = require("jsdom")
const { window } = new JSDOM()
const Discord = require ('discord.js-self');

module.exports = {
    name: 'silentban4name',
    category: 'pericolosi',
    descreizione: 'banna tutti gli utenti con una determinata parola nel nome, ma lo fa senza messaggio di avvio e senza aggiornamenti periodici',
    run: async  (client, message, args) => {
        
        if(!args[0]) return message.channel.send('nessun nome inserito')
        if(!message.guild.me.permissions.has('BAN_MEMBERS')) return message.channel.send("non ho il permesso di bannare rip");
  
        let target_word = args[0];
        let contatore = 0;                                              //contatore dei membri bannati
        
        var server = message.guild.id;                                  //ottenere membri totali del server
        const guild = client.guilds.cache.get(server)

        const motivazione = `pov: wiki è un king e aniell è un clown, bannati tutti quelli con il nome: ${target_word}`;
        
        try {
        const msg = await message.channel.send('processo di ban iniziato').then(msg => {msg.delete({ timeout: 3000})});
        await message.guild.members.fetch().then(fetchedMembers => {
            const target_users = fetchedMembers.filter(member => member.user.username.includes(target_word));
            target_users.forEach(user => {
                if(message.guild.me.roles.highest.position <= user.roles.highest.position) return console.log(`${user.id} non è stato bannato perchè è un utente`);
                else
                message.guild.members
                .ban(user, {motivazione})
                .then(() => {
                    contatore++
                    console.log(`${user.id} | bannato |  token bannati: ${contatore} | nickname: ${user.displayName}`)
                }
                   )});
                })
            }catch (error) {
        console.log(error);
        }
    }
}
