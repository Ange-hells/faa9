exports.run = (client, message, args, customisation) => {
    let member = message.guild.member(message.mentions.users.first());
    let role = "member";
    member.roles.add(role).catch(e => {
        return message.channel.send(`❌**Error:**\n${e}`);
      });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["buff"],
    permLevel: ""
    };
    
exports.help = {
    name: 'enterinsissyworld',
    description: 'Adds a role. It\'s that simple.',
    usage: 'addrole [mention] [role name (don\'t mention the role)]',
    category: "Mod"
};
    