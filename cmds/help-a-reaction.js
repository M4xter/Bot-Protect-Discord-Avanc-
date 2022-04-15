const { MessageEmbed } = require("discord.js");

module.exports.run = async(bot,message) => {

    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas la __permission:__ __**\"GESTION DES MESSAGES\"**__, je ne peux donc envoyer le *help* !")

const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**__Voici les Commande Disponibles :__**\n\n  👮‍♂️ = **Commandes de Modérations,** \n\n 🔑 = **Commandes de Gestion dû Serveur,** \n\n 🧲 = **Commandes de Backup,** \n\n 🤣 = **Commandes Fun,** \n\n 🃏 = **Commandes Gifs,** \n\n 🔞 = **Commandes NSFW,** \n\n 📍 = **Commande Autres,** \n\n 👑 = __**Commande Premium,**__ \n\n ❌ = **Annulé le Help !**")
    .setFooter('Protect', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/765158755905961984/793187964075114567/help.gif")

    const embed_ban = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Modération : 👮‍♂️')
    .setDescription("➜ `+ban,`\n ➜ `+tempban,` \n ➜ `+unban,` \n ➜ `+kick,` \n ➜ `+mute,`\n ➜ `+unmute,` \n ➜ `+nuke,` \n ➜ `+warn,` \n ➜ `+clear,` \n ➜ `+lock.`")
    .setTimestamp()
    .setFooter('Protect', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
    .setImage('https://cdn.discordapp.com/attachments/765158755905961984/793190832051191808/Ban.gif')

const embed_gestion = new MessageEmbed()

.setColor("RANDOM")
.setTitle("Gestion du Serveur : 🔑")
.setDescription("➜`+members`, \n ➜`+vc`, \n ➜`+pp`, \n➜`+pp-server`, \n➜`+ui`, \n➜`+si`, \n➜`+say`, \n➜`+embed`, \n ➜`+addemoji`, \n ➜`+sondage`, \n ➜`+rappel` \n➜`+soon`, \n ➜`+perm` .")
.setTimestamp()
.setFooter('Protect', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/847252877424590878/Hakceur.gif")

const embed_backup = new MessageEmbed()

.setColor("RANDOM")
.setTitle("Backup : 🧲")
.setDescription("➜ `+create,` \n ➜ `+load,` \n ➜ `+info.`")
.setTimestamp()
.setFooter('Protect', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/871115334860558427/Backup.gif")

const embed_jeux = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Fun : 🤣")
.setDescription("➜`+ban2`\n ➜`+report` \n➜`+8ball`, \n➜`+pf`, \n➜`+clyde`, \n➜`+asciify`, \n➜`+captcha`, \n➜`+gay`, \n➜`+lc`, \n➜`+calc`, \n➜`+qr-code`, \n➜`+snapcode`, \n➜`+twitter`, \n➜`+wiki,` \n ➜`+search-i`, \n ➜`+search-y`, \n ➜`+shorturl`, \n ➜`+world`.")
.setTimestamp()
.setFooter('Protect', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/847253207053762590/Jeux.gif")

const embed_gif = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Gif : 🃏")
.setDescription("➜`+meme`, \n➜`+gif`, \n➜`+dog`, \n➜`+cat`, \n➜`+truck`, \n➜`+koala`, \n➜`+calin`, \n➜`+bisous`, \n➜`+fight`, \n➜`+punch`.")
.setTimestamp()
.setFooter('Protect', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865199179163762708/Gif.gif")


const embed_nfsw = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande NFSW : 🔞")
.setDescription("➜ `+fuck`, \n➜ `+sodomie`, \n➜ `+nude`, \n➜ `+seins`, \n➜ `+chatte`.")
.setTimestamp()
.setFooter('Protect', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865188112299720704/X.gif")

const embed_autre = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Autre : 📍")
.setDescription("➜`+add`, \n ➜`+ping`, \n ➜`+bi`, \n➜`+yt`, \n ➜`+discord`, \n ➜`+mybot`, \n ➜`+stat`, \n ➜`+don`. ")
.setTimestamp()
.setFooter('Protect', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/793192156214984734/Fun.gif")

const embed_prem = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commandes Premium : 👑")
.setDescription("➜ `+dm`, \n ➜ `+say-p`,\n ➜ `+embed-p`, \n➜ `+join`, \n➜ `+elexyr`,\n ➜ `+meme22`,\n ➜ `+reel`,\n ➜ `+dedi`, \n➜ `+hack`, \n➜ `+first`, \n ➜ `+bug`.")
.setTimestamp()
.setFooter('Protect', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/815257914813710346/Argent.gif")

const embed_down = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Help à été Annulé !")
.setDescription("**Merci de faire : `+help,` pour avoir accès à la liste des commandes !**")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865197610768007188/Off.gif")

const embed_timeout = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Help à Timeout !")
.setDescription("**Merci de faire : `+help,` pour avoir accès à la liste des commandes !**")
.setTimestamp()
.setFooter('Protect', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865197698155675648/Time_Out.gif")

message.channel.send(embed).then(async msg => {
    const filter = (reaction, user) => (reaction.emoji.name === '👮‍♂️' || reaction.emoji.name === '🔑' || reaction.emoji.name === '🧲' || reaction.emoji.name === '🤣' || reaction.emoji.name === '🃏' || reaction.emoji.name === '🎉' || reaction.emoji.name === '🔞' || reaction.emoji.name === '📍' || reaction.emoji.name === '👑' || reaction.emoji.name === '❌') && user.id === message.author.id;

    const collector = msg.createReactionCollector(filter, { idle: 60000 });

    collector.on('collect', async r => {
        if (r._emoji.name === "👮‍♂️") {
            await r.users.remove(message.author.id)
            msg.edit(embed_ban)

        } else if (r._emoji.name === "🔑") {
            await r.users.remove(message.author.id)
            msg.edit(embed_gestion)

        } else if (r._emoji.name === "🧲") {
            await r.users.remove(message.author.id)
            msg.edit(embed_backup)
            
        } else if (r._emoji.name === "🤣") {
            await r.users.remove(message.author.id)
            msg.edit(embed_jeux)

        } else if (r._emoji.name === "🃏") {
            await r.users.remove(message.author.id)
            msg.edit(embed_gif)


        } else if (r._emoji.name === "🔞") {
            await r.users.remove(message.author.id)
            msg.edit(embed_nfsw)

        } else if (r._emoji.name === "📍") {
            await r.users.remove(message.author.id)
            msg.edit(embed_autre)

        } else if (r._emoji.name === "👑") {
            await r.users.remove(message.author.id)
            msg.edit(embed_prem)

        } else if (r._emoji.name === "❌") {
            await msg.reactions.removeAll();
            msg.edit(embed_down)
        }
    })

    collector.on('end', (collected, reason) => {
        if (reason === 'idle') {
            msg.reactions.removeAll();
            msg.edit(embed_timeout)
        }
    });
    await msg.react('👮‍♂️');
    await msg.react('🔑');
    await msg.react('🧲');
    await msg.react('🤣');
    await msg.react('🃏');
    await msg.react('🔞');
    await msg.react('📍');
    await msg.react('👑');
    await msg.react('❌');
})}
module.exports.config = {
    name: 'help' 
    }