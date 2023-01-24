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
    if (botRolePosition <= rolePosition) return message.channel.send("❌**Error:**  Je ne peut pas ajouté de rôle supperieur eu mien !");
    member.roles.remove(role).catch(e => {
        return message.channel.send("❌**Error:** ");//Il y avait une erreur! Il est probablement que le rôle que vous essayez de retirer est plus élevé que le rôle que j'ai!
    });
    message.channel.send(`✅ **${message.author.username}**, J'ai retiré le role **${role.name}** à **${message.mentions.users.first().username}**.`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nerf"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'removerole',
  description: 'Removes a role. It\'s as simple as adding a role.',
  category: "Mod",
  usage: 'removerole'
};
