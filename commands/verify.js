const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('Get Whitelisted!')
        .addStringOption(option => option.setName('project').setDescription("Give one project that you've worked on. Use only reputable sites to host your content.").setRequired(true))
        .addStringOption(option => option.setName('username').setDescription("What is your minecraft username?").setRequired(true))
        .addStringOption(option => option.setName('rules').setDescription("Have you read and agreed to the rules? Use /info to get them.").setRequired(true).addChoice('Yes', 'agreed').addChoice('No', 'not_agreed'))
        .addIntegerOption(option => option.setName('hours').setDescription("How many hours a week do you play? Higher hours aren't going to get picked more.").setRequired(true))
        .addStringOption(option => option.setName('bestat').setDescription("What do you consider yourself best at?").setRequired(true).addChoice('Building', 'building').addChoice('Redstone', 'redstone').addChoice('Farms & Automation', 'farms').addChoice('Creating minigames', 'minigames'))
        .addIntegerOption(option => option.setName('buildingskill').setDescription("Out of 10, what would you rate your building skill?").setRequired(true))
        .addIntegerOption(option => option.setName('years').setDescription("How many years have you been playing Minecraft?").setRequired(true))
        .addStringOption(option => option.setName('voicechat').setDescription("How often can you use voice chat?").setRequired(true).addChoice('Very Often', 'veryOften').addChoice('Frequently', 'often').addChoice('Sometimes', 'sometimes').addChoice('Very Rarely', 'rarely').addChoice('Never', 'never'))
        .addStringOption(option => option.setName('region').setDescription("What region are you joining from?").setRequired(true).addChoice('Europe', 'eu').addChoice('North America', 'nAm').addChoice('South America', 'sAm').addChoice('Asia', 'as').addChoice('Australia', 'au').addChoice('Other/Rather Not say', 'n/a'))
        .addStringOption(option => option.setName('age').setDescription("How old are you?").setRequired(true).addChoice('Younger than 13', '>13').addChoice('13-15', '13-15').addChoice('15-17', '15-17').addChoice('18-24', '18-24').addChoice('24-37', '24-37').addChoice('37-40', '37-40').addChoice('40+', '40+').addChoice('Rather not say', 'notSaid'))
        .addStringOption(option => option.setName('refer').setDescription("Where did you hear about this server?").setRequired(false)),
	async execute(interaction) {
        //Config Stuff
        let channel = interaction.guild.channels.cache.find(channel => channel.name === "staff-logs")
        function makeEmbed(title, description, color) {
			const embed = new MessageEmbed()
				.setColor(color)
				.setTitle(title)
				.setDescription(description)

			return embed
		}
        var refer = interaction.options.getString('refer')
        if(!refer) {
            refer = 'N/A'
        }
        //Code
        embed = makeEmbed(`New Verification Request from ${interaction.user.username}#${interaction.user.discriminator}`, `\nProject: ${interaction.options.getString('project')}\nUsername: ${interaction.options.getString('username')}\nRead and agreed?: ${interaction.options.getString('rules')}\nHours a week: ${interaction.options.getInteger('hours').toString()}\nBest at: ${interaction.options.getString('bestat')}\nBuilding Skill: ${interaction.options.getInteger('buildingskill').toString()}\nYears Played: ${interaction.options.getInteger('years').toString()}\nVoice chat: ${interaction.options.getString('voicechat')}\nRegion: ${interaction.options.getString('region')}\nAge: ${interaction.options.getString('age')}\nReffered by: ${refer}`, '#75ff70')
        try {
            channel.send({ embeds: [embed] });
        }
        catch(err) {
            interaction.reply('Whoopsies! No Channel with the staff-logs name exists. Please make one!')
        }
		await interaction.reply("We're sending your data to an ultra-secure facility for processing!");
	},
};