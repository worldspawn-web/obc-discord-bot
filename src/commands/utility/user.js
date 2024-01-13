const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 10,
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Расскажу за любого кента, что за тип, чем мутит.'),
  async execute(interaction) {
    const replies = {
      line1: `Так, короче, пацанчика зовут - \`${interaction.user.username}\`.\n`,
      line2: `К нам он завалился в хату - \`${interaction.member.joinedAt}\`\n`,
      line3: `Пацанчик ровный, **ни за чем стрёмным замечен не был**.`,
    };
    await interaction.reply(`${replies.line1}${replies.line2}${replies.line3}`);
  },
};
