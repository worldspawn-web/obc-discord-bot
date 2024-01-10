const config = require('./config.json');
const Discord = require('discord.js');

const prefix = config.prefix;

// COMMANDS START HERE

function test(robot, mess, args) {
  mess.channel.send('Test!');
}

// COMMANDS LIST

var comms_list = [
  {
    name: 'test',
    out: test,
    about: 'Test cmd',
  },
];

module.exports.comms = comms_list;
