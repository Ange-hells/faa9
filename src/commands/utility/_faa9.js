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
      desc: `Hmhhmmh m hmm.hm.h.
      Mm hmmh Hmmh h'mhhhmhm hm H M H H M H H M H.Mmh Mmmhhmh.hhm mmh mmhm m hmhhmhmhmmh mhm hmmh hmhhm hmhhmhh.
      Mm mmhhmmh mh hmhh hm hmmh mhmmh mh hm hmmh hmhmhmhm hm hmm mh hmmh hmmhhmhmhh hmh mhhmhmhhmmhh 
      
      Mmhhmh hmmhm hmmh hmm hm hmmh, hmhh hmhhmmhh hmh, hmhmhmhm m hmmh hmhhhmmhm hmh mhhhm hm mmh Mmmhhmh.hhm hmhh hmhhmh hmmh hmhm 
      
      Mmh hm h'mhhmhm hmm h'mh hmmhm hmmh h'mhhmhhhm mh hm hmmh hmmhmmhm mhm hmhhm hmmhhmm.`,
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
  