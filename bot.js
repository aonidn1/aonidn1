const Discord = require('dicord.js');
const bot = new Discord.Client();

const prefix = 'c/';

bot.on('message', message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    {if (msg === prefix + 'aonidn1') {
        message.channel.send('Wut?');
        return;
    }

});

bot.on('ready', () => {
    console.log('ready!!');
});

bot.login(process.env.BOT_TOKEN);
