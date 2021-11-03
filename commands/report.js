const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('report')
		.setDescription('Report someone on the server.')
        .addStringOption(option => option.setName('type').setDescription("Is this on the discord server or MC server?").setRequired(true).addChoice('Discord', 'discord').addChoice('MC', 'mc'))
        .addStringOption(option => option.setName('who').setDescription("Who do you want to report? Discord Tag & MC username pls").setRequired(true))
        .addStringOption(option => option.setName('why').setDescription("What is the reason behind it?").setRequired(true))
        .addStringOption(option => option.setName('when').setDescription("When did this occur?").setRequired(true)),
	async execute(interaction) {
        let channel = interaction.guild.channels.cache.find(channel => channel.name === "staff-logs")
		await interaction.reply("We're sending your data to an ultra-secure facility for processing")
        try {
            channel.send(`**New Report from ${interaction.user.username}#${interaction.user.discriminator}**\n\nType: ${interaction.options.getString('type')}\nWho: ${interaction.options.getString('who')}\nWhy: ${interaction.options.getString('why')}\nWhen: ${interaction.options.getString('when')}`);
        }
        catch(err) {
            interaction.reply('Whoopsies! No Channel with the staff-logs name exists. Please make one!')
        }
	},
};