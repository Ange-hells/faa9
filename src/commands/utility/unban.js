//non fonctionnel
const Discord = require('discord.js');
exports.run = (client, message, args, customisation) => {
  client.unbanAuth = message.author;
  let user = args[0];
  let reason = args.slice(1).join(' ');
  if (reason.length < 1) reason = 'Pas de raison precissé.';
  if (!user) return message.channel.send('Vous devez mentioné quelqu\'un de bani pour que je le déban').catch(console.error);
  message.guild.members.unban(user, reason).catch(e =>{
    if(e){
      return message.channel.send(`${client.users.cache.get(`${args[0]}`).username} est banni :wink:`);
    }
  }).then(() =>{
    client.embed.send(message, {
      color: (0xFF0000),
      code: true, 
      desc: `Action : Unban,
        User : ${user.username}#${user.discriminator} (${user.id}),
        Moderator : ${message.author.username}#${message.author.discriminator}),
        Reason : ${reason}`,
    });
      let logchannel = message.guild.channels.cache.find(x => x.name = 'logs');
      if  (!logchannel){
      message.channel.send({embed})
      }else{
        client.channels.cache.get(logchannel.id).send({embed});
        message.channel.send({embed})
      }
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'unban',
  description: 'Unbans the user.',
  category: "Mod",
  usage: 'unban [mention] [reason]'
};
