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
    title: 'Help',
    code: true,
    desc: `Le bot a été créé par **${client.users.cache.get(client.config.ownerID).tag}**, Si vous avez des questions ou souhaitez suggérer de nouvelles fonctionnalités ou signaler des bogues, veuillez leur envoyer un message direct. Toutes les commandes commencent par \`${client.config.prefix}\`.`,
    fields: [{
      name: 'invite',
      value: 'Un moyen d\'inviter ce bot dans votre propre guilde.'
    },
    {
      name: 'init',
      value: 'Synchroniser le canal publicitaire.'
    },
    {
      name: 'desc',
      value: 'Définissez la description de votre annonce.'
    },
    {
      name: 'preview',
      value: 'Prévisualisez votre annonce.'
    },
    {
      name: 'bump',
      value: 'Diffusez votre annonce à toutes les autres guildes.'
    },
    {
      name: 'help',
      value: 'Commande inutile.'
    }
    ]
  })
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: ['h'],
  guildOnly: false,
  permLevel: 'User'
}

/** Command Help */
exports.help = {
  name: 'help',
  usage: '',
  description: 'Helpful command.'
}
