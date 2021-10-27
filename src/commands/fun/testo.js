const { MessageEmbed } = require("discord.js-self");
const { Util } = require('discord.js-self');
const Genius = require("genius-lyrics");
const Client = new Genius.Client()

module.exports = {
    name: 'testo',
    category: 'fun',
    aliases: [],
    descrizione: `ottiene il testo di una canzone`,
    run: async(client, message, args) => {

        message.delete()

        let titolo = Util.cleanContent(args.join(" "), message);
        if(!args[0]) return message.channel.send('devi inserire il titolo di una canzone');
        
        //ottiene tutte le canzoni con quel nome
        const searches = await Client.songs.search(titolo);
        //ottiene la prima canzone che trova
        const firstSong = searches[0];
        // ottiene la lyric della canzone
        const lyrics = await firstSong.lyrics();
        const song = await lyrics.substring(0, lyrics.length)
        setTimeout(() => {message.channel.send(song, { split: true })}, 3000)
    }
}