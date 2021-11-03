const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { info } = require('../content.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName(info[0].name)
		.setDescription(info[0].description)
		.addStringOption(option =>
			option.setName('category')
				.setDescription('The information catagory')
				.setRequired(true)
				.addChoice(info[0].choices[0].whitelist[0].name, 'whitelist')
				.addChoice(info[0].choices[0].ip[0].name, 'ip')
				.addChoice(info[0].choices[0].suggestion[0].name, 'suggestion')
				.addChoice(info[0].choices[0].faq[0].name, 'faq')
				.addChoice(info[0].choices[0].server[0].name, 'server')),
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
			embed = makeEmbed(info[0].choices[0].whitelist[0].title, info[0].choices[0].whitelist[0].text, info[0].choices[0].whitelist[0].color)
			await interaction.reply({ embeds: [embed] });
		}
		else if(string == 'ip') {
			embed = makeEmbed(info[0].choices[0].ip[0].title, info[0].choices[0].ip[0].text, info[0].choices[0].ip[0].color)
			await interaction.reply({ embeds: [embed] });
		}
		else if(string == 'suggestion') {
			embed = makeEmbed(info[0].choices[0].suggestion[0].title, info[0].choices[0].suggestion[0].text, info[0].choices[0].suggestion[0].color)
			await interaction.reply({ embeds: [embed] });
		}
		else if(string == 'faq') {
			embed = makeEmbed(info[0].choices[0].faq[0].title, info[0].choices[0].faq[0].text, info[0].choices[0].faq[0].color)
			await interaction.reply({ embeds: [embed] });
		}
		else if(string == 'server') {
			embed = makeEmbed(info[0].choices[0].server[0].title, info[0].choices[0].server[0].text, info[0].choices[0].server[0].color)
			await interaction.reply({ embeds: [embed] });
		}
	},
};