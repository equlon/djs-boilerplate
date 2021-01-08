const config = require('./configs/options');

const BotClient = require('./structures/BotClient');
const client = new BotClient(config);

client.login();
