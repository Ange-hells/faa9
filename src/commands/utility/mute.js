const Discord = require('discord.js');
exports.run = async (client, message, args, customisation) => {
  let reason = args.slice(1).join(' ');
  if(!message.mentions.users.first())return message.reply("Vous devez mentioné quelqu\'un pour que je le mute")
  let user = message.mentions.users.first();
  let muteRole = client.guilds.cache.get(message.guild.id).roles.cache.find(val => val.name === 'Mute');
  if(message.mentions.users.first().id === customisation.ownerid) return message.reply('vous pouvez le Muté vous même:facepalm:')
  if(message.author.id === message.mentions.users.first()) return message.reply("Vous ne pouvez vous auto-muté:facepalm:");
  if (!muteRole) {
    try {
        muteRole = await message.guild.roles.create({ data: {
            name:"Mute",
            color: "#000000",
            permissions:[]
        }});

        message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.createOverwrite(muteRole, {
                SEND_MESSAGES: false,
                MANAGE_MESSAGES: false,
                READ_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
    } catch(e) {
        console.log(e.stack);
    }
  }
  if (reason.length < 1) reason = 'Pas de raison precisé !';
  if (message.mentions.users.size < 1) return message.reply('Vous devez mentioné quelqu\'un pour que je le mute').catch(console.error);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.reply(':x: Je n\'ai pas la permissions de faire çà').catch(console.error);
  if (message.guild.member(user).roles.cache.has(muteRole.id)) {
    if(message.content.includes("/mute")) return message.reply("Cet.te user est deja mute")
    message.guild.member(user).roles.remove(muteRole).then(() => {
      client.embed.send(message, {
        color: (0x00FFFF),
        code: true, 
        desc: `Action : Unmute,
          User : ${user.username}#${user.discriminator} (${user.id}),
          Moderator : ${message.author.username}#${message.author.discriminator}),
          Reason : ${reason}`,
      });
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
    });
  } else {
    if(message.content.includes("/unmute")) return message.reply("that user has not been muted **yet**")
    message.guild.member(user).roles.add(muteRole).then(() => {
      client.embed.send(message, {
        color: (0x00FFFF),
        code: true, 
        desc: `Action : Mute,
          User : ${user.username}#${user.discriminator} (${user.id}),
          Moderator : ${message.author.username}#${message.author.discriminator}),
          Reason : ${reason}`,
      });      
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
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unmute'],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'mute',
  description: 'mutes or unmutes a mentioned user',
  category: "Mod",
  usage: 'un/mute [mention] [reason]'
};
