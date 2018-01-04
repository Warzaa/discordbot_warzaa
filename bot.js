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
    member.guild.channels.get('390028038688997379').send('**' + member.user.username + '**, Bienvenue dans la ParasiteSquad! Prepare toi a faire du sale :fire:'); 
});

client.on('guildMemberAdd',(member) => { member.addRole('398521427290095625-').catch(console.error); 
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
