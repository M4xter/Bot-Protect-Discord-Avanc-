const Discord = require('discord.js');
const fs = require('fs');
const dateFormat = require("dateformat");
var colors = require("colors");

exports.run = async (bot, message, args) => {

    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapter = new FileSync('./db.json');
    const db = low(adapter);
    let author = message.author.id;

    if (!db.get("🔧➔Team Blacklist").find({
            user_id: author
        }).value()) {
        message.channel.send("__**Uniquement les owners peuvent utiliser cette commande !**__").catch(console.error); //Check De Permissions.
    } else {

        const black_list = JSON.parse(fs.readFileSync('./blacklist.json', 'utf-8'));

        let authorb = message.author.tag;
        let authorbid = message.author.id;
        let date = `${dateFormat(new Date(), "mm/dd/yyyy - HH:MM:ss")}`

        let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.channel.send("**Veuillez mentionner un membre ou ID !**"); //Check Si Il Y A Un Membre.

        let reason = args[1];
        if (!reason) return message.channel.send("**Veuillez spécifier une raison !**"); //Check Si Il Y A Une Preuve & Raison.

        if (!black_list[member.id]) black_list[member.id] = {
            blacklist: 0,
            reason: reason,
            authorb: authorb,
            authorbid: authorbid,
            date: date
        }



        if (!black_list[member.id]) message.channel.send(`**${member} est déjà dans la blacklist !**`)

        message.channel.send(`**${member} viens juste d'être blacklist avec comme raison :__${reason}__** par ${message.author.tag} \n\nle __**${date}**__ !`)
        black_list[member.id].blacklist++;

        fs.writeFileSync('./blacklist.json', JSON.stringify(black_list))


        console.log(`${member} a été`.white, `bl`.red, `raison : ${reason}`.green)


    };
};

module.exports.config = {
    name: "bl"
}