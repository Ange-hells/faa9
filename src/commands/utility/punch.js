exports.run = (client, message, customisation) => {
  var owner = customisation.ownerid //systest a changé
  let user = message.mentions.users.first();
  if(message.mentions.users.size < 1) return message.reply('Vous devez mantionné quelqu\'un pour que je le tape.')
  if(user.id === message.author.id) return message.channel.send("https://tenor.com/view/why-huh-but-why-gif-13199396")
  if(user.id === owner) return message.reply("Desolé je ne peut pas faie de mal a mes Maitres.se.s ."); //a modifier : => change to "staff"
  if(user.id === client.user.id) return message.channel.send(`**Punches ${user.username}**`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'punch',
  description: 'Punches a user.',
  category: "Action",
  usage: 'punch <user>'
};
