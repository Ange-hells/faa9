/**
 * Provides useful information.
 * @module commands/faa9
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  client.embed.send(message, {
    title: "faa9",
    code: true,
    desc: `Bonjour a tou.te.s. 
    Je suis **Faa9** l'esclave de **${client.guild_name}**.`,
  });
};

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: "User",
};

/** Command Help */
exports.help = {
  name: "faa9",
  usage: "",
  description: " .",
};
