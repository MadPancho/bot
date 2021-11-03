const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Gives all the things you can do!'),
	async execute(interaction) {
		await interaction.reply('Well, for one, you can *type slash and look at the decriptions under all of the commands* but this is just for your convinence!\n\n`/help` Gives this dialog\n`/info <param>` Gives the channel a bit of info about the server!\n`/ping` A simple command for testing.\n`/report`  A method to report someone. \n`/verify` Use this to apply for a whitelist!\n\n Why did i make this it just took a while.');
	},
};