const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Show the channel information on the server')
		.addStringOption(option =>
			option.setName('category')
				.setDescription('The information catagory')
				.setRequired(true)
				.addChoice('Whitelist Information', 'whitelist')
				.addChoice('IP address information', 'ip')
				.addChoice('How can I make a suggestion for the server?', 'suggestion')
				.addChoice('Frequently asked questions', 'faq')
				.addChoice('Server Information', 'server')),
	async execute(interaction) {
		function makeEmbed(title, description, color) {
			const embed = new MessageEmbed()
				.setColor(color)
				.setTitle(title)
				.setDescription(description)

			return embed
		}
		const string = interaction.options.getString('category');
		
		if(string == 'whitelist') {
			embed = makeEmbed('Whitelist help', 'In order to get whitelisted, visit #server-info', '#75ff70')
			await interaction.reply({ embeds: [embed] });
		}
		else if(string == 'ip') {
			embed = makeEmbed('Server IP help', 'For the server IP, visit #server-info', '#75ff70')
			await interaction.reply({ embeds: [embed] });
		}
		else if(string == 'suggestion') {
			embed = makeEmbed('Suggestion help', 'In order to make a suggestion, visit https://forms.gle/m8UoQtw6FAEprMiF8', '#75ff70')
			await interaction.reply({ embeds: [embed] });
		}
		else if(string == 'faq') {
			embed = makeEmbed('FAQ', 'Common questions are answered here. \n\nhttps://github.com/CarbonGhost/Prosperity/wiki/FAQ', '#75ff70')
			await interaction.reply({ embeds: [embed] });
		}
		else if(string == 'server') {
			embed = makeEmbed('Server Information', 'https://github.com/CarbonGhost/Prosperity/wiki', '#75ff70')
			await interaction.reply({ embeds: [embed] });
		}
	},
};