const Command = require('../structures/Command');

module.exports = class extends (
  Command
) {
  constructor(...args) {
    super(...args, {
      description: 'A command used for testing.',
      aliases: ['test2', 'test3'],
      enabled: true
    });
  }

  run(message) {
    message.channel.send('It works!');
  }
};
