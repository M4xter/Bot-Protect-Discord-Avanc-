const Discord = require("discord.js");

module.exports.run = async(bot,message,args) => {
  let inviteembed = new Discord.MessageEmbed()

        const embed = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setAuthor('Comment avoir le Premium du Bot ? 👑')
        .setDescription("Le __**Premium** coûte **0.50€** à **VIE**__  ! \n\n **__Boost __ `le serveur`,\n\n le temps de ton Boost,**  \n\n DM <@!911610558682394655>  pour achat ! \n\n __**Merci à se qu'il soutien le Bot !**__ ")
        .setTimestamp()
        .setFooter('Protect')
        .setImage('https://cdn.discordapp.com/attachments/767361889990344715/815257914813710346/Argent.gif')
  message.channel.send(embed)  
  }


  module.exports.config = {
    name: 'premium' 
    }
