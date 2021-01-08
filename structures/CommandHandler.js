const { Collection } = require('discord.js');
const { readdirSync } = require('fs');
const { parse } = require('path');

module.exports = class CommandHandler {
  constructor(client) {
    this.client = client;
    this.client.commands = new Collection();
    this.client.aliases = new Collection();
  }

  load(path) {
    const cmd = new (require(path))(this.client);
    if (!cmd.enabled) return;
    const { name } = parse(path);
    this.client.commands.set(name, cmd);
    for (const alias of cmd.aliases) {
      this.client.aliases.set(alias, name);
    }
  }

  loaddir(path) {
    const files = readdirSync(path).filter((f) => f.split('.').pop() == 'js');
    for (const file of files) {
      this.load(`../${path}/${file}`);
    }
  }

  resolve(cmd) {
    return (
      this.client.commands.get(cmd) ||
      this.client.commands.get(this.client.aliases.get(cmd))
    );
  }

  run(command, message, args) {
    command.run(message, args);
  }
};
