module.exports = class Command {
  constructor(client, ops) {
    this.client = client;
    this.description = ops.description;
    this.aliases = ops.aliases;
    this.enabled = ops.enabled;
  }

  run() {
    throw new Error(`Command ${this.name} does not have an init method.`);
  }
};
