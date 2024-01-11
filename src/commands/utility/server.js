const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 10,
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Provides information about the server.'),
  async execute(interaction) {
    await interaction.reply(
      `Название сервера: ${interaction.guild.name} (${interaction.guild.memberCount} пользователей).`
    );
  },
};
