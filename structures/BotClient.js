const { Client } = require('discord.js');

const EventHandler = require('./EventHandler');
const CommandHandler = require('./CommandHandler');

module.exports = class BotClient extends (
  Client
) {
  constructor(config) {
    super({ disableMentions: 'everyone' });

    this.settings = config.settings;
    this.creds = config.creds;

    this.eventHandler = new EventHandler(this);
    this.cmdHandler = new CommandHandler(this);
  }

  login() {
    this.eventHandler.loaddir('events');
    this.cmdHandler.loaddir('commands');
    super.login(this.creds.token);
  }
};
