/**
 * Provides useful information.
 * @module commands/kiss
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */

// const Discord = require('discord.js');
// const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them :3");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "916601553199202314") return message.reply("No kissing unless you're my Dev :<")
    if (message.mentions.users.first().id == message.author.id) return message.reply("Idk if thats possible chief")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "916601553199202314") return message.reply("B-Baka, it's not like I like it or anything >///<")
    // const { body } = await superagent
    // .get("https://nekos.life/api/kiss");
    
    // const embed = new Discord.MessageEmbed()
    // .setColor("#ff9900")
    // .setTitle(`${message.author.username} kissed ${message.mentions.users.first().username} >:3`)
    // .setImage(body.url) 
    // .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
    // message.channel.send({embed})
    client.embed.send(message, {
      Color: ("#ff9900"),
      title: `${message.author.username} kiss ${message.mentions.users.first().username} :3`,
      code: true, 
      image: `https://nekos.life/api/kiss`,
    });

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kiss',
    description: 'Kisses someone OwO',
    category: "Action",
    usage: 'kiss'
  };
