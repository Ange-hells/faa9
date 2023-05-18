//V1
module.exports = async(client, member) => {
    try {
        let guild = member.guild;

        let welcomeMsg =  "Welcome {user.ping} to {guild.name}!"  // Get the custom message or use the preset one

        // Replace all valid tags
        let finalMsg = await welcomeMsg
        .replace(/{user.ping}/g, `${member.user}`)
        .replace(/{user.name}/g, `${member.user.username}`)
        .replace(/{user.id}/g, `${member.user.id}`)
        .replace(/{user.tag}/g, `${member.user.tag}`)
        .replace(/{guild.name}/g, `${guild.name}`)
        .replace(/{guild.id}/g, `${guild.id}`)
        .replace(/{guild.totalUser}/g, `${guild.memberCount}`);
      
      return member.guild.systemChannel.send(finalMsg) // Send the final message to the welcome channel
    
    } catch (e) {
        console.log(e);
    }
};