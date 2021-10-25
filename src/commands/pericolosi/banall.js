const { JSDOM } = require("jsdom")
const { window } = new JSDOM()
const Discord = require ('discord.js-self');

module.exports = {
    name: 'banall',
    category: 'pericolosi',
    descrizione: 'banna tutti gli utenti di un server',
    run: async  (client, message, args) => {
        
        if(!message.guild.me.permissions.has('BAN_MEMBERS')) return message.channel.send("non ho il permesso di bannare rip");
 
        const motivazione = 'pov: wiki ha fatto piangere aniell';
        let contatore = 0;                                              //contatore dei membri bannati
        
        var server = message.guild.id;                                  //ottenere membri totali del server
        const guild = client.guilds.cache.get(server)
        

        try {
        const msg = await message.channel.send('processo di ban iniziato').then(msg => {msg.delete({ timeout: 3000})});
        await message.guild.members.fetch().then(fetchedMembers => {
            const target_users = fetchedMembers
            target_users.forEach(user => {
                if(message.guild.me.roles.highest.position <= user.roles.highest.position) return console.log(`<${user.id} non è stato bannato perchè è un utente`) 
                if(!user) return console.log("non sono riuscito a trovare questo utente")
                if(message.guild.ownerID == user.id) return console.log(`<@${user.id}>/${user.id} non è stato bannato perchè sussy baka`)
                else {    
                message.guild.members
                        .ban(user, {motivazione})
                        .then(() => {
                        contatore++;
                        console.log(`${user.id} | bannato | token bannati: ${contatore} | nickname: ${user.displayName}`);
                        })         
                    }
                })
            })
        }catch (error) {
        console.log(error)
        }
    }
}

