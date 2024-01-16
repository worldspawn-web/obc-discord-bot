const { SlashCommandBuilder } = require('discord.js');
const { sp, mp } = require('../../data/games.json');

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName('whattoplay')
    .setDescription('Подкину идей для совместных игр!')
    .addStringOption((option) =>
      option
        .setName('category')
        .setDescription('Соло или кооп?')
        .setRequired(true)
        .addChoices(
          { name: 'Solo', value: 'sp' },
          { name: 'Coop', value: 'mp' }
        )
    ),
  async execute(interaction) {
    const category = interaction.options.getString('category');

    let focusCategory;
    category === 'mp' ? (focusCategory = mp) : (focusCategory = sp);

    const gamesAmount = focusCategory.length;
    const randomizer = Math.floor(Math.random() * gamesAmount);

    const { game, description, link } = focusCategory[randomizer];

    await interaction.reply(`**${game}** \n\`\`\`${description}\`\`\`${link}`);
  },
};
