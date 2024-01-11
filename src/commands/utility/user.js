const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 10,
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Provides information about the user.'),
  async execute(interaction) {
    await interaction.reply(
      `User: ${interaction.user.username}. Date Joined: ${interaction.member.joinedAt}.`
    );
  },
};
