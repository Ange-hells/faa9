const Discord = require('discord.js');
const neko = require('nekos.life');
const neko = new client();

async function slap() {
  url = console.log(await neko.slap());
  img = console.log(url.substring(5,));
  // img = str:split(url, ' ');
  return img
// url: 'https://cdn.nekos.life/slap/slap_007.gif:'
}

exports.run = async (client, message, args, customisation, tools) => {
  if (!message.mentions.users.first()) return message.reply("Vous devez mentioné quelqu\'un pour que je le gifle.");
  if (message.mentions.users.first().id === "916601553199202314") return message.reply('Je ne peux pas le blesser.');
  // if (message.mentions.users.first().id === client.user.id && message.author.id === "916601553199202314"){
  //   // const { body } = neko(slap);
  //   client.embed.send(message, {
  //     color: ("#ff9900"),
  //     code: true,
  //     tittle: `No u! *slaps*${message.mentions.users.first().username}`,
  //     desc: `No u! *slaps*${message.mentions.users.first().username} `,
  //     desc: img,
  //     // console.log(await neko.slap())",
  //   });
  // }else if (message.mentions.users.first().id === client.user.id && message.author.id !== "916601553199202314"){
  //   return message.channel.send("NUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU **owwie**")
  // }
  // const { body } = await superagent.get("https://nekos.life/api/v2/img/slap");
  client.embed.send(message, {
    color: (0xff9900),
    code: true, 
    tittle:`OwO, ${message.mentions.users.first().username} Tu as été giflé par ${message.author.username}`,
    desc: `OwO, ${message.mentions.users.first().username} Tu as été giflé par ${message.author.username},`,
    desc: slap()
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
