module.exports = {
    name: 'ready',
    run: (client) => {
        console.log(`~wiki selfbot tool è online! \nconnesso all'account: ${client.user.username}\nlista comandi: w!!help\nlista comandi musica: w!!musichelp`)
        client.user.setActivity("giocando col TOS", {
            name: 'giocando col TOS',
            type: "STREAMING",
            url: "https://www.twitch.tv/amouranth"
          });
    }
}