/**
 * Sends a dynamic bot invite link to the executor.
 * @module commands/kick
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */

// const Discord = require('discord.js');
exports.run = (client, message, args, customisation) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Vous devez mentioné quelqu\'un pour que je le kick.').catch(console.error);
  if (user.id === message.author.id) return message.reply("Je ne peux pas te laisser faire ça, l'automutilation est mauvaise :facepalm:");
  if (user.id === client.user.id) return message.reply("Je ne peut pas me kické moi-meme !?:joy:");
  
  if (message.mentions.users.first().id === "916601553199202314") return message.reply("Je ne peut pas kické mon Developer:wink:");
  if (reason.length < 1) reason = 'Pas de raison precisé !';

  if (!message.guild.member(user).kickable) return message.reply('Je ne peut pas kické ce menbre');
  
  // const embed = new Discord.MessageEmbed()
  // .setColor(0x0000FF)
  // .setTimestamp()
  // .addField('Action:', 'Kick')
  // .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
  // .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  // .addField('Reason', reason)
  // .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
  
  client.embed.send(message, {
    color: (0x0000FF),
    code: true, 
    desc: `Action : Kick,
      User : ${user.username}#${user.discriminator} (${user.id}),
      Moderator : ${message.author.username}#${message.author.discriminator}),
      Reason : ${reason}`,
  });
  
  if(user.bot) return;
   message.mentions.users.first().send({embed}).catch(e =>{
    if(e) return
  });
  message.guild.member(user).kick();

  let logchannel = message.guild.channels.cache.find(x => x.name = 'logs');
  if  (!logchannel){
  message.channel.send({embed})
  }else{
    client.channels.cache.get(logchannel.id).send({embed});
    message.channel.send({embed})
  } 
  if(user.bot) return;
  message.mentions.users.first().send({embed}).catch(e =>{
    if(e) return 
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user.',
  category: "Mod",
  usage: 'kick [mention] [reason]'
};
