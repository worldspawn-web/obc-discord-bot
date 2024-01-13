const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 10,
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Расскажу за нашу команду.'),
  async execute(interaction) {
    const replies = {
      line1: `Это моя команда, мы короче темками всякими занимаемся, чисто братская идиллия, ну ты понял.\n`,
      line2: `Команду назвали - \`${interaction.guild.name}\`, а расшифровать аббревиатуру сможет лишь **настоящий братуха**.\n`,
      line3: `Сейчас в нашей, так сказать, банде - \`${interaction.guild.memberCount} темщиков\`.\n`,
      line4: `Так-то дохуя конечно, **но нас будет ещё больше**!`,
    };
    await interaction.reply(
      `${replies.line1}${replies.line2}${replies.line3}${replies.line4}`
    );
  },
};
