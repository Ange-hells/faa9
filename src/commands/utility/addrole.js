// const settings = require('./settings.json');
exports.run = (client, message, args, customisation) => {
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("❌**Error:** Je n'ai pas la permission **Manage Roles** !");
  if (message.mentions.users.size === 0) return message.reply("❌Veuillez mentionner un utilisateur à qui attribuer le rôle.\nExample: `addrole @user Members`");
  let member = message.guild.member(message.mentions.users.first());
  if (!member) return message.reply("❌**Error:** Cet.te user n'existe pas sur ce serveur !");
  let rname = message.content.split(" ").splice(2).join(" ");
  let role = message.guild.roles.cache.find(val => val.name === rname);
  if (!role) return message.reply(`❌**Error:** ${rname} n'est pas un role de ce server!`);
  let botRolePosition = message.guild.member(client.user).roles.highest.position;
  let rolePosition = role.position;
  let userRolePossition = message.member.roles.highest.position;
  if (userRolePossition <= rolePosition) return message.channel.send("❌**Error:** Je ne peut pas ajouté de rôle supperieur à votre plus haut rôle !")
  if (botRolePosition <= rolePosition) return message.channel.send("❌**Error:** Je ne peut pas ajouté de rôle supperieur eu mien !");
  member.roles.add(role).catch(e => {
    return message.channel.send(`❌**Error:**\n${e}`);
  });
  message.channel.send(`✅ **${message.author.username}**, J'ai ajouté le rôle **${rname}** à **${message.mentions.users.first().username}**.`);
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["buff"],
permLevel: "Bot Owner"
};

exports.help = {
name: 'addrole',
description: 'Adds a role. It\'s that simple.',
usage: 'addrole [mention] [role name (don\'t mention the role)]',
category: "Mod"
};
