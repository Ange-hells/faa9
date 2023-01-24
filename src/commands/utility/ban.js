const Discord = require('discord.js');
exports.run = (client, message, args, customisation) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send('Vous devez mentioné quelqu\'un pour que je le ban.').catch(console.error);
  if (message.mentions.users.first().id === message.author.id) return message.channel.send('Je ne peux pas te laisser faire ça, l\'automutilation est mauvaise:facepalm:');
  if (user.id === client.user.id) return message.channel.send("Je ne peut pas me banir moi-meme !?:joy:");
  if (message.mentions.users.first().id === "916601553199202314") return message.channel.send("Je ne peut pas banir mon Developer:wink:");
  if (reason.length < 1) reason = 'Pas de raison precisé !';
  let botRolePossition = message.guild.member(client.user).roles.highest.position;
  let rolePosition = message.guild.member(user).roles.highest.position;
  let userRolePossition = message.member.roles.highest.position;
  if (userRolePossition <= rolePosition) return message.channel.send("❌**Error:** Je ne peut pas banir de membre avec un role supperieur ou egale a votre role le plus haut !")
  if (botRolePossition <= rolePosition) return message.channel.send("❌**Error:** Je ne peut pas banir de membre avec un role supperieur au mien !")
  if (!message.guild.member(user).bannable) {
    message.channel.send(`:redTick: Je ne peut pas ban ce menbre.`);
    return
  }else{

    client.embed.send(message, {
      Color: (0xFF0000),
      code: true, 
      desc: `Action : Ban,
        User : ${user.username}#${user.discriminator} (${user.id}),
        Moderator : ${message.author.username}#${message.author.discriminator}),
        Reason : ${reason}`,
    });
    //let obj = JSON.parse(`{"days":7, "reason": ${reason}}`)
    if(user.bot) return;
    message.mentions.users.first().send({embed}).catch(e =>{
      if(e) return
    });
    message.guild.members.ban(user.id, {days:7, reason: reason})
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
  }
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'ban',
  description: 'Bans the mentioned user.',
  category: "Mod",
  usage: 'ban [mention] [reason]'
};
