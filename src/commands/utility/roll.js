exports.run = (client, msg) => {
    msg.channel.send(`:game_die: **${msg.author.username}**, obtien un **${Math.floor(Math.random() * 6) + 1}**!`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'rollD6',
  description: 'Rolls six sided dice.',
  category: "Fun",
  usage: 'roll'
};
