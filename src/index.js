const {Client, Intents, Collection} = require ('discord.js-self');
const { promisify } = require('util');
const glob = require('glob');
const fs = require('fs');
var path = require('path');
const config = '../config.json';
const file = require(config);
const confapikey = path.join(__dirname, '..', '/node_modules/popyt/out/util/confapikey.json')
const apifile = require(confapikey);

const { MusicBot } = require('discord-music-system');

const globpromise = promisify(glob);


const client = new Client({
    ws: {
        intents: Intents.ALL
    }
});

client.commands = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.aliases = new Collection();
client.categories = new Set();

;(async() => {
    const eventFiles = await globpromise(`${__dirname}/events/**/*.js`)
    const commandFiles = await globpromise(`${__dirname}/commands/**/*.js`)

    eventFiles.map((value) => {
        const file = require(value);
        client.events.set(file.name, file);
        client.on(file.name, file.run.bind(null, client));
    });

    commandFiles.map((value) => {
        const file = require(value);
        client.commands.set(file.name, file)
        client.categories.add(file.category);
        if(file.aliases) {
            file.aliases.map((value) => client.aliases.set(value, file.name));
        }
    });


})();



const prompt = require('prompt-sync')();

try {  
    var data = fs.readFileSync('art.txt', 'utf8');
    console.log(data.toString());    
} catch(e) {
    console.log('Error:', e.stack);
}

//inserzione api key di yt
//se la api key non è inserita
if (apifile.apikey == " ") {
    const apikey = prompt('inserisci la tua apikey: ');
    apifile.apikey = apikey;
    
    fs.writeFile(path.join(__dirname, '..', '/node_modules/popyt/out/util/confapikey.json'), JSON.stringify(apifile, null, 2), function writeJSON(err) {
      if (err) return console.log(err);
      console.log('\napi key inserita con successo!\n');
    })

client.musicBot = new MusicBot(client, {
    ytApiKey: apifile.apikey,
    prefix: 'w!!', // Your bot prefix [non cambiare se non sai dove mettere le mani per cambiare il prefisso dei main bot]
    language: 'en' // fr, en, es, pt
})

client.on('message', async message => {
    if(message.author.bot) {
        return;
    };
    client.musicBot.onMessage(message);
})
//se la api key è già inserita
}else {
     console.log('accesso eseguito mediante api key precedentemente inserita \nse si desidera cambiare yt api key usare il comando w!!swapkey\n\n')

        client.musicBot = new MusicBot(client, {
            ytApiKey: apifile.apikey,
            prefix: 'w!!', // Your bot prefix [non cambiare se non sai dove mettere le mani per cambiare il prefisso dei main bot]
            language: 'en' // fr, en, es, pt
        })
        
        client.on('message', async message => {
            if(message.author.bot) {
                return;
            };
            client.musicBot.onMessage(message);
        })
}


if (file.token == " ") {
const token = prompt('inserisci il tuo token: ');
file.token = token;

fs.writeFile('./config.json', JSON.stringify(file, null, 2), function writeJSON(err) {
  if (err) return console.log(err);
  console.log('\ntoken inserito con successo!\n');
})

client.login(file.token).catch(error => {
    setTimeout(() => {
        file.token = " "
        fs.writeFile('./config.json', JSON.stringify(file, null, 2), function writeJSON(err) {
            if (err) return console.log(err);
          })}, 2000)
    
    setTimeout(() => {console.log(`token inserito invalido :( prova a levare " " all'inizio e alla fine del token`)}, 3000)
    setTimeout(() => {console.clear()}, 6000)
})
} else {
    console.log('accesso eseguito mediante token precedentemente inserito \nse si desidera cambiare token usare il comando w!!swaptoken\n\n')
    client.login(file.token).catch(error => {
        setTimeout(() => {
            file.token = " "
            fs.writeFile('./config.json', JSON.stringify(file, null, 2), function writeJSON(err) {
                if (err) return console.log(err);
              })}, 2000)
        
        setTimeout(() => {console.log(`credenziali scadute! controlla l'email, \nil tuo account potrebbe essere stato disattivato o potresti aver cambiato token!`)}, 3000)
        setTimeout(() => {console.clear()}, 5000)
    })
}
