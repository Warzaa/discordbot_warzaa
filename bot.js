const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('363348162473099266').send('**' + member.user.username + '**, Bienvenue dans la ParasiteSquad! Prepare toi a faire du sale :fire:'); 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
