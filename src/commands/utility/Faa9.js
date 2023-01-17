/**
 * Provides useful information.
 * @module commands/help
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  client.embed.send(message, {
    title: 'Faa9',
    code: true,
    desc: `Bonjour a tou.te.s. Je suis Faa9 **${client.users.cache.get(client.config.ownerID).tag}**, Si vous avez des questions ou souhaitez suggérer de nouvelles fonctionnalités ou signaler des bogues, veuillez leur envoyer un message direct. Toutes les commandes commencent par \`${client.config.prefix}\`.`,
  })
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: ['h'],
  guildOnly: false,
  permLevel: ''
}

/** Command Help */
exports.help = {
  name: '',
  usage: '',
  description: '.'
}
