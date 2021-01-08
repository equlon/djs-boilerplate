const { readdirSync } = require('fs');

module.exports = class EventHandler {
  constructor(client) {
    this.client = client;
  }

  load(path) {
    const event = new (require(path))(this.client);
    if (!event.enabled) return;
    this.client.on(event.name, (...args) => event.init(...args));
  }

  loaddir(path) {
    const files = readdirSync(path).filter((f) => f.split('.').pop() == 'js');
    for (const file of files) {
      this.load(`../${path}/${file}`);
    }
  }
};
