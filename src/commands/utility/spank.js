const Discord = require('discord.js');

exports.run = async (client, message, args, customisation, tools) => {
    if (!message.mentions.users.first()) return message.reply("Vous devez mentioné quelqu\'un pour que je le spank");
    if(!message.channel.nsfw) return message.reply("NSFW is not enabled in this channel");
    if(message.mentions.users.first().id === "916601553199202314") return message.reply('Je ne peut pas spanké mon Dev baka.:facepalm: '); //He will spank your ass off >:3

    client.embed.send(message, {
      color: ("0xff9900"),
      code: true,
      Title:`${message.mentions.users.first().username}, a été fessée par ${message.author.username} >:3`,
      desc: `${message.mentions.users.first().username}, a été fessée par ${message.author.username} >:3`,
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'spank',
    description: 'Spanks someone xD',
    category: "Action",
    usage: 'spank'
  };
