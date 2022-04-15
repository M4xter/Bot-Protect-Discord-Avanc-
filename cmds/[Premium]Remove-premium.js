const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('./prem.json')
    const db = low(adapter)
    var founder = [
        "911610558682394655"
    ]

    console.log(`Quelqu'un`.blue, `n'est plus`.bold, `prenium`.green)

    if (founder.includes(message.author.id)) {
        let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply("**Veuillez mentionner un membre ou ID !**");

        if (!db.get("Premium").find({ user_id: member.id }).value()) {
            message.channel.send("**L'utilisateur <@" + member.id + "> n'est pas __\"Premium\"__ !** <a:nonoxCatdoigtdanslecul:841399403490574347>");
        } else {
            db.get("Premium").remove({ user_id: member.id }).write()
            message.channel.send("**L'utilisateur <@" + member.id + "> est retiré du __\"Premium\"__ !**");
            message.guild.members.cache.get(args[0]).send("*Vous venez d'être retiré du \"**Premium\" ** !*")
        }
    } else {
       message.channel.send(":x:  __**Uniquement les `《👑》BRAS-DROIT` peux utiliser cette commande !**__")
    }
}

module.exports.config = {
    name: "p-remove"
}