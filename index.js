const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
});

const prefix = "!";

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("messageCreate", (message) => {

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send("pong!");
  } else

  if (message.content.startsWith(`${prefix}foo`)) {
    message.channel.send("bar!");
  }
});

client.login("MTA0NzY2NjA1NzU0MTg2MTM4Ng.Gvy5I6.zc59MTWfMoh4PuC7AOKEdC0F7W17T8iq1_jrxU");
