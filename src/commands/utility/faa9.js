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
    Je suis Faa9 l'esclave de S I S S Y S H O W. Mes Maitres.sse mon mise a disposition ici pour votre confort.
    Ma mission et donc de vous obeir et de vous facilité la vie en vous fournisant des interactions 
    
    Sachez toute fois que je suis, dans certains cas, habilité a vous sanctioné sur ordre de mes Maitres.sse donc restez bien sage 
    
    Sur ce j'espere que l'on poura bien s'entendre et je vous souhaite une bonne journée.`,
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
