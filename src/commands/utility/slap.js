const Discord = require('discord.js');
// const neko = require('neko.life');

exports.run = async (client, message, args, customisation, tools) => {
  if (!message.mentions.users.first()) return message.reply("Vous devez mentioné quelqu\'un pour que je le gifle.");
  if (message.mentions.users.first().id === "916601553199202314") return message.reply('Je ne peux pas le blesser.');
  if (message.mentions.users.first().id === client.user.id && message.author.id === "916601553199202314"){
    // const { body } = neko(slap);
    client.embed.send(message, {
      color: ("#ff9900"),
      code: true,
      tittle: `No u! *slaps*${message.mentions.users.first().username}`,
      desc: `No u! *slaps*${message.mentions.users.first().username}`,
    });
  }else if (message.mentions.users.first().id === client.user.id && message.author.id !== "916601553199202314"){
    return message.channel.send("NUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU **owwie**")
  }
  // const { body } = await superagent.get("https://nekos.life/api/v2/img/slap");
  client.embed.send(message, {
    color: (0xff9900),
    code: true, 
    tittle:`OwO, ${message.mentions.users.first().username} Tu as été giflé par ${message.author.username}`,
    desc: `OwO, ${message.mentions.users.first().username} Tu as été giflé par ${message.author.username}`,
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'slap',
  description: 'Slaps someone OwO',
  category: "Action",
  usage: 'slap'
};
