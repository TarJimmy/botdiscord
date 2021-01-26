require('dotenv').config();
const   config      =   require('./config.json'),
        Discord     =   require('discord.js'),
        client      =   new Discord.Client(),
        prefix      =   config.prefix,
        _           =   require('underscore'),
        Functions   =   require('./Functions'),
        functions   =   new Functions(client);

console.log(config)
client.on('ready', ()=> {
    console.log('Bot discord is ready');
});

client.on('message', (message) => {
    if (message.author.username == "stapsmemelevrai") {
        message.reply('Ce que tu dis n\'est pas interessant. Je me suis permis de le supprimer.');
        message.delete();
        return;
    }
    if (!functions.haveWordBanned(message, config.wordBanned)) {

    }
});

client.login("NzEzOTE1NTg4OTA0NDg0OTI0.XsnDtA.YnKh-RKlumIk7YEtVGk9L6ESNI0");

