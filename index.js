import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if(message.author.bot) return;
  message.reply("Hi", message.user);
  console.log(message.content);
});

client.login(
  "MTIxNTMxMDY5MjE0MDQ0OTc5Mg.Gwaa0v.J5ch5HsZJJZ3iBu0vqcXd_qxc36p9E60N5UaXQ"
);
