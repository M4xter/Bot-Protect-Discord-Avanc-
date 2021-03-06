
const	Discord = require("discord.js"),
	fetch = require("node-fetch");

	module.exports.run = async (bot, message, args) => {

		const text = args.join(" ");

		if(!text){
			return message.channel.send("Veuillez founir un message ! :x:");
		}

		const m = await message.channel.send("Merci de patienter ! <a:patient1:964187920623874078> ", null, {
			prefixEmoji: "loading"
		});
		try {
			const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
			const json = await res.json();
			const attachment = new Discord.MessageAttachment(json.message, "clyde.png");
			message.channel.send(attachment);
			m.delete();
		} catch(e){
			console.log(e);
			m.error("Quelque chose s'est mal passé... Merci de patienter, puis réessayez!", null, {
				edit: true
			});
		}

	}



	module.exports.config = {
		name: "clyde",
		description: "Génère un message de \"Clyde\"",
		usage: "clyde"
	}