exports.run = (client, message) => {
    let args = message.content.split(" ").slice(1);
    message.delete();
    // if (message.content.includes("@everyone") || message.content.includes("@here") || message.mentions.everyone) return message.channel.send("Tu ne me fais pas cingler quelqu'un boi!");
    let msg = message.channel.send(msg = args.join(" ")).cleanContent;
    client.embed.send(message,args, {
        color: ("0xEB77D3"),
        code: true,
        title:``,
        desc: msg,
      });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "talk",
    description: "Makes the bot repeat your message.",
    category: "Useful",
    usage: "talk [message]"
};
