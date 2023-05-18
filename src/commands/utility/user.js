const moment = require('moment');
const Discord = require('discord.js');
function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return "depuis " + days + (days == 1 ? " jour" : " jours");
};
const totalGuilds = ((acc, guildCount) => acc + guildCount, 0);
const totalMembers = ((acc, memberCount) => acc + memberCount, 0);
// const totalChannels = results[2].reduce((acc, channelCount) => acc + channelCount, 0);
// const totalVoice = results[3].reduce((acc, voiceCount) => acc + voiceCount, 0);

// const duration = moment.duration(client.uptime).format("\`D\` [days], \`H\` [hrs], \`m\` [mins], \`s\` [secs]");

exports.run = async (client, message, args, customisation) => {
  let user = message.mentions.users.first();
  let muser = message.guild.member(message.mentions.users.first());
  if (user.id === client.user.id) //return message.reply("Je ne peut pas me kické moi-meme !?:joy:");
    client.embed.send(message, {
      color: ("0xEB77D3"),
      code: true,
      tittle: `User : ${user.username}#${user.discriminator} (${user.id})`,
      Thumbnail: client.user.avatarURL({ size: 1024 }), //`${user.avatarURL()}`,
      desc: `
        ┆Moderator : ${message.author.username}#${message.author.discriminator}
        ┆Statut : ${muser.presence.status.toUpperCase()}
        🤖┆Nom : ${client.user.username}
        🆔┆ID : ${client.user.id}
        🌐┆Servers : ${totalGuilds}
        👥┆Members : ${totalMembers}
        📅┆Created : <t:${Math.round(client.user.createdTimestamp / 1000)}>
        
        🏷┆Version de Node.js : ${process.version}
        📂┆Version de Discord.js : ${Discord.version}
        🔧┆Proprietaire : "916601553199202314"
        🔧┆Developer : "916601553199202314"
        photo de profil et nom par : "570733006835417091"
        💻┆Commandes : ${client.commands.size}

        ┆Roles : ${muser.roles.cache.array()}
        🔗┆Lien : soutient moi sur mon patreon.com/faa9`,
    });
  if (!message.mentions.users.first() && args.length > 0){
    user = message.guild.member(args[0]).user
    muser = message.guild.member(args[0]);
  }
  if (!muser) muser = message.member;
  if (!user) user = message.author;

  let status = ""
  // if(status === null) status = "No Game"
  client.embed.send(message, {
    color: ("0x447003"),
    code: true,
    tittle: `User : ${user.username}#${user.discriminator} (${user.id})`,
    Thumbnail: `${user.avatarURL()}`,
    desc: `
    Moderator : ${message.author.username}#${message.author.discriminator}
    Currently : ${muser.presence.status.toUpperCase()}
    Joined Discord : ${moment(user.createdAt).toString().substr(0, 15)}\n(${moment(user.createdAt).fromNow()})
    Joined Server : ${moment(muser.joinedAt).toString().substr(0, 15)}\n(${moment(muser.joinedAt).fromNow()})
    Roles : ${muser.roles.cache.array()}
    Bot : ${user.bot.toString().toUpperCase()}`,
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'user',
  description: 'Displays information about a user.',
  category: "Useful",
  usage: 'user <@user>'
};
