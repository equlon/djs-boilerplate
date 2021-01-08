const Event = require('../structures/Event');

module.exports = class extends (
  Event
) {
  constructor(...args) {
    super(...args, {
      name: 'message',
      enabled: true
    });
  }

  init(message) {
    if (message.author.bot) return;

    const prefix = this.client.settings.prefix;

    if (
      message.author.bot ||
      message.channel.type == 'dm' ||
      !message.content.startsWith(prefix)
    )
      return;

    const cmd = message.content
      .toLowerCase()
      .slice(prefix.length)
      .split(/ +/g)[0];
    const args = message.content.split(/ +/g);
    args.shift();

    const command = this.client.cmdHandler.resolve(cmd);
    if (command) this.client.cmdHandler.run(command, message, args);
  }
};
