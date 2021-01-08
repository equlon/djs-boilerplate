const Event = require('../structures/Event');

module.exports = class extends (
  Event
) {
  constructor(...args) {
    super(...args, {
      name: 'ready',
      enabled: true
    });
  }

  init() {
    console.log(`${this.client.user.username} is up and running.`);
  }
};
