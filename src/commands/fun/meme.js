const https = require('https');
const Discord = require('discord.js-self')
const url = 'https://www.reddit.com/r/dank_meme/hot/.json?limit=100'

module.exports = {
    name: 'meme',
    category: 'fun',
    aliases: ['ilarità', 'burla'],
    cooldown: 2000,
    descrizione: 'posta un meme molto ilare e divertente che provocherà risate assicurate',
    run: async (client, message, args) => {
        message.delete()
        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data


                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed


                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor('#FEE440')
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                    .setTimestamp()
                message.channel.send(imageembed)
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })
    }
}