const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args, customisation) => {
  let newname = args.slice(1).join(' ');
  let user;
  let mention = message.mentions.users.first();
  if (!mention){
    user = message.guilds.members.get(args[0])
    if (!user) return message.reply('Vous devez me dire qui renomé:facepalm:').catch(console.error);
  }else{
    user = message.guild.member(mention)
  }
  if (user.id === "916601553199202314" && message.author.id !== "916601553199202314") return message.reply("Je ne peut pas renomé mon Developer:wink:");
  user.setNickname(newname).catch(e => {
    if(e) return message.channel.send(`An error occured: \`\`\`${e}\`\`\``)
  });
  message.channel.send("Fait.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'rename',
  description: 'Rename the mentioned user.',
  category: "Mod",
  usage: 'rename @user|userID newname'
};
