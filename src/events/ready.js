const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ну ладно, чё, я погнал - (c.) ${client.user.tag}`);
  },
};
