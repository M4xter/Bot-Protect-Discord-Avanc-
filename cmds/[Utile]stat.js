const Discord = require("discord.js");

module.exports.run = async(bot,message,args) => {
  let inviteembed = new Discord.MessageEmbed()

        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Le bot est présent sûr : __**${bot.guilds.cache.size} serveurs,**__ *merci à eux !*`)
  message.channel.send(embed)  
  }


  module.exports.config = {
    name: 'stat' 
    }