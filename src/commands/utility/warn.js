const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
//const mysql = require('mysql');
//const file = require('../mysql.json');

exports.run = async (client, message, args, customisation) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  //let logchannel = message.guild.channels.cache.find(x => x.name = 'logs');
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("❌**Error:** Vous n'avez pas la permission **Kick Members** !");
  if (message.mentions.users.size < 1) return message.reply('Vous devez mentionez quelqu\'un pour le warm.').catch(console.error);
  if (message.mentions.users.first().id === message.author.id) return message.reply('Je ne peux pas te laisser faire ça, l\'automutilation est mauvaise:facepalm:');
  if (message.mentions.users.first().id === "916601553199202314") return message.reply("Je ne peut pas banir mon Developer:wink:");
  //if (!logchannel) return message.channel.send('I cannot find a logs channel');
  if (reason.length < 1) reason = 'Pas de raison precisé !';
  
  if(!warns[`${user.id}, ${message.guild.id}`]) warns[`${user.id}, ${message.guild.id}`] = {
    warns: 0
  };

  warns[`${user.id}, ${message.guild.id}`].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
    if(err) throw err;
  });

  client.embed.send(message, {
    color: (0xFFFF00),
    code: true, 
    desc: `Action : Warning,
      User : ${user.username}#${user.discriminator},
      Warned by: ${message.author.username}#${message.author.discriminator}),
      Number of warnings: warns[${user.id}, ${message.guild.id}].warns),
      Reason : ${reason}`,
  });
  // const embed = new Discord.MessageEmbed()
  // .setColor(0xFFFF00)
  // .setTimestamp()
  // .addField('Action:', 'Warning')
  // .addField('User:', `${user.username}#${user.discriminator}`)
  // .addField('Warned by:', `${message.author.username}#${message.author.discriminator}`)
  // .addField('Number of warnings:', warns[`${user.id}, ${message.guild.id}`].warns)
  // .addField('Reason', reason)
  // .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
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


  if(warns[`${user.id}, ${message.guild.id}`].warns == 2){
    let muteRole = message.guild.roles.find('name', 'Mute')

    let mutetime = "60s";
    message.guild.members.get(user.id).addRole(muteRole.id);
    message.reply(`${user.tag} es temporairement mute`);

    setTimeout(function(){
      message.guild.members.get(user.id).removeRole(muteRole.id)
    }, ms(mutetime))
  }

  if(warns[`${user.id}, ${message.guild.id}`].warns == 3){
    message.guild.member(user).kick(reason);
    message.reply('Cet.te user a deja etais kick :facepalm:')
  }

  if(warns[`${user.id}, ${message.guild.id}`].warns == 5){
    message.guild.member(user).ban(reason);
    message.reply('Vous n\'aurez plus à vous soucier de cette user, je l\'ai bannis !');
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["smolyeet"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  category: "Mod",
  usage: 'warn [mention] [reason]'
};
