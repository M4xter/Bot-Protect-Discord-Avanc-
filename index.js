const Discord = require("discord.js");
const bot = new Discord.Client({disableMentions: 'everyone' });
const config = require('./db/config.json')
var color = require('chalk');
const fs = require('fs');
humanizeDuration = require('humanize-duration');
bot.snipes = new Discord.Collection();
const Command = require("./")
var colors = require("colors");
bot.commands = new Discord.Collection();
const mongoose = require("mongoose");
const { Database } = require("./db/config.json")



fs.readdir('./cmds/', (err, files) => {
  if (err) console.log(err)
  let jsfile = files.filter(f => f.split('.').pop() === 'js')
  if (jsfile.length <= 0) {
  }

  jsfile.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    bot.commands.set(props.config.name, props)
  })
});

bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (_err, files) => {
  files.forEach((file) => {
      if (!file.endsWith(".js")) return;
      let props = require(`./cmds/${file}`);
      let commandName = file.split(".")[0];
      bot.commands.set(commandName, props);
      console.log(`[COMMANDS]`.red, `Chargement de la commande >`.white, `${commandName}`.red);
  });
});



bot.on("ready", async () => {
  

  let statuses = [
    "Bot Protect",
    `${bot.guilds.cache.size} serveurs !`,
    "Prefix +",
  ]

  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {
      type: "STREAMING",
      url: 'https://www.twitch.tv/tr4ksss'
    })
  }, 5000)
  
  console.log(`${"-".repeat(67)}\n`.cyan +
    `Le bot`.green, `est bien connecté sur`.magenta, `Discord`.blue, `en tant que`.grey, `${bot.user.tag}`.yellow
);
    
  if(!Database) return;
  mongoose.connect(Database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log(`Le bot`.green, `est bien connecté à la`.magenta, `Database`.blue, `en tant que`.grey, `${bot.user.tag}\n`.yellow +
    `${"-".repeat(67)}\n`.cyan
) 
  }).catch((err) => {
    console.log(err)
  });

})

bot.on('message', async message => {
  const prefix = "+";

  if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if (message.content === `<@!${bot.user.id}>`) {
      const ee = new Discord.MessageEmbed()
        .setTitle("On ma ping ?")
        .setColor("RANDOM")
        .setDescription("**Mon prefix est `+`, pour avoir accès au commandes :**  `!help`, \n\n __**Merci à toi !**__")
        .setTimestamp()
      message.channel.send(ee)
    }

    if(!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

  const cmd = bot.commands.get(commande);
  const embederr = new Discord.MessageEmbed()
  .setDescription(`La commande : \`${commande}\` n'existe pas, \n pour voir la liste des commmandes faites : \`+help\`  !`)
  .setColor("RANDOM")
  .setTimestamp()
    if(!cmd) return message.channel.send(embederr)

    cmd.run(bot, message, args);
})


bot.on('guildCreate', async guild => {
  const channel = bot.channels.cache.get("964187512778145823")
  console.log(channel)
  let addembed = new Discord.MessageEmbed()
    .setTitle(`BOT vient d'être ajouté sur le serveur : ${guild.name}`)
    .setThumbnail(guild.iconURL())
    .addField(`👑 Propriétaire:`, `${guild.owner}`)
    .addField(`📇 Nom du serveur :`, `${guild.name}`)
    .addField(` Id du serveur:`, `${guild.id}`)
    .addField(` Nombre de membres:`, `${guild.memberCount}`)
    .setColor("11d646")
    .setTimestamp()
    .setFooter(`Merci grâce à toi nous sommes à ${bot.guilds.cache.size} serveurs`, bot.user.displayAvatarURL())
  channel.send(addembed);

})

bot.on('guildCreate', async guild => {
  let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Merci d'avoir ajouté :!")
    .setDescription("**Mon prefix est =** `+`")
  guild.owner.send(embed);
});

bot.on('message', async message => {

if (message.author.id != "964043195946246164") return;
if (message.content === `Wsh <@!${bot.user.id}> comment va-tu ?`) {
  message.channel.send(`Très bien et vous maître ?`)};
if (message.content === `Super que fais-tu de beau ?`) {
 message.channel.send(`Je surveille à ce que tous se passent bien !`)};
if (message.content === `Préviens-moi s'il a un problème ^^`) {
  message.channel.send(`D'accord, je vous appelle sur votre ligne privée !`)};
  if (message.content === `Allez bonne journée !`) {
  message.channel.send(`Merci, à vous aussi **Maître Suprême !**`)};  
  if (message.content === `Allez bonne soirée !`) {
    message.channel.send(`Merci, à vous aussi **Maître Suprême !**`)};

  });

bot.on('guildMemberAdd', async member => {
     const black_list = JSON.parse(fs.readFileSync('./blacklist.json', 'utf-8'));
  const reason = `${black_list[member.id]} [Blacklist Auto de User#0001 !]`;

  const embedmp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("BlackList-Automatique !")
    .setTitle("Pour pourvoir être deban, clique ici !")
    .setURL("https://discord.gg/x")
    .setDescription(`Vous êtes **banni** du serveur  **__${member.guild.name}__** parce-que vous êtes dans la __**"Blacklist"**__ !"`)
    .setTimestamp()

  if (!black_list[member.id]) return;

  let blackMember = black_list[member.id].blacklist;


  if (blackMember === 1) {
    await member.send(embedmp);
    member.ban({
      reason: reason
    })
  };
})


bot.on('messageDelete', async message => {

  ///////////
  if (message.mentions.members.first() && !message.mentions.members.first().user.bot && message.mentions.members.first().user.id !== message.author.id) {
  if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
      .setTitle('Ghost Ping Détecté !')
      .setColor("RANDOM")
      .setTimestamp()
      .addField('Auteur', message.author)
      .addField('Message', message.content);

    message.channel.send(embed)
  }
})

bot.on('messageDelete', async (message) => {
  if (message.author.bot) return;
     const snipes = message.client.snipes.get(message.channel.id) || [];
     snipes.unshift({
       content: message.content,
       author: message.author,
       image: message.attachments.first() ? message.attachments.first().proxyURL : null,
       date: new Date().toLocaleString("en-GB", {
         dataStyle: "full",
         timeStyle: "short",
       }),
     });
     snipes.splice(10);
     message.client.snipes.set(message.channel.id, snipes);
     let embed = new Discord.MessageEmbed()
       .setTitle(`Nouveau message supprimé! `)
       .setDescription(
         `**L'utilisateur ${message.author.tag} a supprimé un message dans <#${message.channel.id}>**`
       )
       .addField(`Contient`, message.content, true)
       .setColor(`RED`);
     let channel = message.guild.channels.cache.find(
       (ch) => ch.name === "logs"
     );
     if (!channel) return;
     channel.send(embed);
   
 
 })

bot.login(config.token)