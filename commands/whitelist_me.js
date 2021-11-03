const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Whitelist')
		.setDescription('How to get whitelisted')    
  ,
  
  
	async execute(interaction) {
		function makeEmbed(title, description, color) {
			const embed = new MessageEmbed()
				.setColor(color)
				.setTitle(title)
				.setDescription(description)
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .addField('Check this!', '[click here!](https://www.youtube.com/watch?v=dQw4w9WgXcQ)', true)

			return embed
		}
    
			embed = makeEmbed('How to Whitelist', 'In order to get whitelisted, check this info', '#75ff70')
			await interaction.reply({ embeds: [embed] });
		
	},
};
