const { SlashCommandBuilder } = require('@discordjs/builders');
const { ping } = require('../content.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName(ping[0].name)
		.setDescription(ping[0].description),
	async execute(interaction) {
		await interaction.reply(ping[0].text);
	},
};