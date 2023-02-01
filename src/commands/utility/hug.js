const Discord = require('discord.js');

exports.run = async (client, message, args, customisation, tools) => {
  client.embed.send(message, {
    color: ("#ff9900"),
    code: true,
    tittle: `${message.author.username} tu fait un gros calin `,
    desc: `
    console.log(await neko.hug())`,
  });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'hug',
    description: 'Sends a random doggo',
    category: "Fun",
    usage: 'hug'
  };
