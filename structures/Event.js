module.exports = class Event {
  constructor(client, ops) {
    this.client = client;
    this.name = ops.name;
    this.enabled = ops.enabled;
  }

  init() {
    throw new Error(`Event ${this.name} does not have an init method.`);
  }
};
