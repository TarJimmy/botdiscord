require('dotenv').config();
const   config      =   require('./config.json'),
        Discord     =   require('discord.js'),
        client      =   new Discord.Client(),
        prefix      =   config.prefix,
        _           =   require('underscore'),
        Functions   =   require('./Functions'),
        functions   =   new Functions(client);

var isWork = false;

client.on('ready', ()=> {
    console.log('Bot discord is ready');
});

client.on('message', (message) => {
    if (!isWork) {{
        isWork = true;
        if (message.author.username == "stapsmemelevrai") {
            message.reply('Ce que tu dis n\'est pas interessant. Je me suis permis de le supprimer.');
            message.delete();
            isWork = false;
            return;
        }
        if (!functions.haveWordBanned(message, config.wordBanned)) {
            isWork = false;
        }
    }}
});

//
client.login("NzEzOTE1NTg4OTA0NDg0OTI0.XsnDtA.LlxZ6MtdeqPbFv4ZHkoxk4NzaGU");

