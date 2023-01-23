const config = {
  statusURL: 'https://srhpyqt94yxb.statuspage.io/api/v2/status.json',
  prefix: '&',
  botGuildID: '689327932799451186',
  ownerID: '916601553199202314',
  mongodbURL:"",
  ad: {
    desc: {
      min_length: 10,
      max_length: 255
    }
  },
  botMaintenance: false,
  deleteCommands: true,
  deleteTime: 30000,
  emojis: {
    delete: '689328295958806639'
  },
  permLevels: [
    {
      level: 0,
      name: 'User',
      check: () => {
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      }
    },
    // {
    //   level: 2,
    //   name: 'Modo',
    //   check: (client, message) => {
    //     return new Promise((resolve, reject) => {
    //       resolve(message.member.hasPermission("BAN_MEMBERS") === true)
    //     })
    //   }
    // },
    // {
    //   level: 3,
    //   name: 'Admin',
    //   check: (client, message) => {
    //     return new Promise((resolve, reject) => {
    //       resolve(message.member.hasPermission("MANAGE_GUILD") === true)
    //     })
    //   }
    // },
    {
      level: 4,
      name: 'Server Owner',
      check: (client, message) => {
        return new Promise((resolve, reject) => {
          resolve(message.member.id === message.guild.owner.id)
        })
      }
    },
    {
      level: 10,
      name: 'Bot Owner',
      check: (client, message) => {
        return new Promise((resolve, reject) => {
          resolve(message.member.id === config.ownerID)
        })
      }
    }
  ]
}

module.exports = config
