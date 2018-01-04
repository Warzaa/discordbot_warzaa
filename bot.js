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
    member.guild.channels.get('channelID').send('**' + member.user.username + '**, a rejoint la ParasiteSquad'); 
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('channelID').send('**' + member.user.username + '**, a quitté la ParasiteSquad');
    //
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
