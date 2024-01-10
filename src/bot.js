//
// INVITE LINK
// https://discord.com/api/oauth2/authorize?client_id=1194681595483930716&permissions=8&scope=bot
//

const { Client, GatewayIntentBits } = require('discord.js');
const robot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
const comms = require('./comms.js');
const fs = require('fs');

let config = require('./config.json');
let token = config.token;
let prefix = config.prefix;

robot.on('ready', function () {
  console.log(robot.user.username + ' successfully launched!');
});

robot.on('message', (msg) => {
  if (
    msg.author.username != robot.user.username &&
    msg.author.discriminator != robot.user.discriminator
  ) {
    var comm = msg.content.trim() + ' ';
    var comm_name = comm.slice(0, comm.indexOf(' '));
    var messArr = comm.split(' ');
    for (comm_count in comms.comms) {
      var comm2 = prefix + comms.comms[comm_count].name;
      if (comm2 == comm_name) {
        comms.comms[comm_count].out(robot, msg, messArr);
      }
    }
  }
});

robot.login(token);
