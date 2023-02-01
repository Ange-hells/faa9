const Discord = require('discord.js');
exports.run = (client, message, args, customisation) => {
  let reason = args.slice(1).join(' ');
  if (!message.mentions.users.first()) return message.reply("Vous devez mentionner un utilisateur pour que je le soft ban !");
  let user = message.mentions.users.first();
  //if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(":no_entry_sign: **Error:** You don't have the **Ban Members** permission!");
  if (message.mentions.users.size < 1) return message.reply('Vous devez mentionner quelqu\'un pour que je le soft ban !').catch(console.error);
  if (message.mentions.users.first().id === message.author.id) return message.reply('Je peux te laisser faire ça, l\'automutilation est mal:facepalm:');
  if (message.mentions.users.first().id === "916601553199202314") return message.reply("Je ne peut pas ban mon Developer:wink:");
  if (reason.length < 1) reason = 'Aucune raison fournie.';

  if (!message.guild.member(user).bannable) return message.reply(`:redTick: Je ne peux pas banir ce membre`);
  
  client.embed.send(message, {
    color: ("0xFF0000"),
    code: true,
    desc: `Action : Soft Ban
    User : ${user.username}#${user.discriminator} (${user.id})
    Moderator : ${message.author.username}#${message.author.discriminator}
    Reason : reason`,
  });

  //let obj = JSON.parse(`{"days":7, "reason": ${reason}}`)
  message.mentions.users.first().send({embed});
  message.guild.members.ban(user.id, {days:7, reason: reason});
  message.guild.members.unban(user.id, reason);

  let logchannel = message.guild.channels.cache.find(x => x.name = 'logs');
  if  (!logchannel){
    message.channel.send({embed})
  }else{
    client.channels.cache.get(logchannel.id).send({embed});
    message.channel.send({embed})
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'softban',
  description: 'Soft Bans the mentioned user.',
  category: "Mod",
  usage: 'softban [mention] [reason]'
};
