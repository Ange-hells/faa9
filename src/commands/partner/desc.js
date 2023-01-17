/**
 * Set the description of the advertisement you want to bump.
 * @module commands/desc
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  const desc = args.join(' ')
  if (desc === undefined || desc === '') {
    return client.embed.send(message, { desc: 'Spécifiez une description de guilde. Notez que votre invitation de guilde sera jointe automatiquement.' })
  }

  if (desc.length > client.config.ad.desc.max_length) {
    return client.embed.send(message, { desc: `La description ne peut pas être plus que ${client.config.ad.desc.max_length} caractères.` })
  }
  if (desc.length < client.config.ad.desc.min_length) {
    return client.embed.send(message, { desc: `La description ne peut pas être courte que ${client.config.ad.desc.min_length} caractères.` })
  }
  if (desc.includes('http') || desc.includes('@everyone') || desc.includes('@here')) {
    return client.embed.send(message, { desc: 'Pas de liens ou de mentions dans la description s\'il vous plaît.' })
  }
  client.database.run('UPDATE settings SET desc = ? WHERE guildid = ?', [desc, message.guild.id])
  client.embed.send(message, { desc: 'Description mise à jour avec succès.' })
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'Server Owner'
}

/** Command Help */
exports.help = {
  name: 'desc',
  usage: '<description>',
  description: 'Set a description for your advertisement.'
}
