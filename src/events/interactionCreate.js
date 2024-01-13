const { Events, Collection } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.error(`Команда ${interaction.commandName} не найдена...`);
      return;
    }

    // Cooldowns
    const { cooldowns } = interaction.client;
    if (!cooldowns.has(command.data.name)) {
      cooldowns.set(command.data.name, new Collection()); // sets a cooldown, if none
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.data.name);
    const defaultCooldownDuration = 10;
    const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;

    if (timestamps.has(interaction.user.id)) {
      const expirationTime =
        timestamps.get(interaction.user.id) + cooldownAmount;
      if (now < expirationTime) {
        const expiredTimestamp = Math.round(expirationTime / 1000);
        return interaction.reply({
          content: `Не спамь, сука! Отдохни **${defaultCooldownDuration} секунд**, я тебя умоляю.`, // TODO: add locales
          ephemeral: true,
        });
      }
    }

    // Removes the timeout after some interval
    timestamps.set(interaction.user.id, now);
    setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

    // Command execution
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: 'Бля, хуйня какая-то, не могу выполнить команду!',
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: 'Бля, хуйня какая-то, не могу выполнить команду!',
          ephemeral: true,
        });
      }
    }
  },
};
