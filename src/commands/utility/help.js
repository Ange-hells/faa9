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
    desc: `Bot créé par **${client.users.cache.get(client.config.ownerID).tag}**, Si vous avez des questions, souhaitez suggérer de nouvelles fonctionnalités ou signaler des bogues, n'hesitez pas à envoyer un message. Toutes les commandes commencent par \`${client.config.prefix}\`.`,
    desc: `Commandes staff`,
    fields: [
      {
        name: 'help',
        value: 'Commande inutile.'
      },
      {
        name: 'faa9',
        value: 'Synchroniser le canal publicitaire.'
      },
      {
        name: 'mute',
        value: 'Définissez la description de votre annonce.'
      },
      {
        name: 'ping',
        value: 'Prévisualisez votre annonce.'
      },
      {
        name: 'say',
        value: 'Fait parler Faa9'
      },
      {
        name: 'addrole',
        value: ''
      },
      {
        name: 'removerole',
        value: 'Retire un role'
      },
      {
        name: 'rename',
        value: 'Renome'
      },
      {
        name: '',
        value: ''
      },
      {
        name: '',
        value: ''
      },
      {
        name: '',
        value: ''
      },
      {
        name: '',
        value: ''
      },
    ],
    desc: `commandes user (les images associées ne sont pour l'instant pas disponible)`,
    fields: [
      {
        name: 'kiss',
        value: 'Embrasse la personne mantionné'
      },
      {
        name: 'hug',
        value: 'Fait un calin à la personne mantionné'
      },
      {
        name: 'slap',
        value: 'Gifle la personne mantionné'
      },
      {
        name: 'spank',
        value: 'Met une fessée à la personne mantionné'
      },
      {
        name: 'punch',
        value: 'Tape la personne mantionné'
      },
      {
        name: 'rollD6',
        value: 'lance un D6'
      },
      {
        name: '',
        value: ''
      },
      {
        name: '',
        value: ''
      },
    ],
    fields: [
      {
        name: 'help',
        value: 'Commande inutile.'
      },
    ],
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
