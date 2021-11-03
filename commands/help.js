const { SlashCommandBuilder } = require('@discordjs/builders');
const { help } = require('../content.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName(help[0].name)
		.setDescription(help[0].description),
	async execute(interaction) {
		await interaction.reply(help[0].text);
	},
};