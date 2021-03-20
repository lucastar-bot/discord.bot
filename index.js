const token = require('./token.json')
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";


client.on('ready', async () => {
    console.log('Bot prêt au demmarage')
    bot.user.setStatus("online")
    bot.user.setActivity("Joue à mangé")
});

client.on('message',(message) => {
    if(message.content.toLowerCase() === "bonjour") {
    message.channel.send('Bonjour à toi, <@' + message.author.id + '> !');
    }
    });


client.on('message',(message) => {
    if(message.content.toLowerCase() === "salut") 
     message.channel.send('Salut à toi, <@' + message.author.id + '> !');

    })

    client.login(process.env.TOKEN);




    