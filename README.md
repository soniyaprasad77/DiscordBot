# Discord Bot
This Discord bot project is a simple implementation using the Discord.js library to create a bot that can interact with messages and slash commands in a Discord server.

## Clone the Repository:

```
git clone https://github.com/your-username/DiscordBot
cd DiscordBot
```
Install Dependencies:

```
npm install
```

## Create a Discord Bot:

Go to the Discord Developer Portal and create a new application.

Under the "Bot" tab, click "Add Bot" to create a bot user.
Copy the bot token and client id. 

## Configure Environment Variables:

Create a file named .env in the project root.
Add the following line to the .env file:

```
token=YOUR_DISCORD_BOT_TOKEN
client_id = YOUR_CLIENT_ID
```

Replace YOUR_DISCORD_BOT_TOKEN with the bot token you copied earlier.

## Run the Bot:

```
npm start
```
The bot should now be running and connected to your Discord server. It will respond with "Hi" to messages and reply with "Pong" to the "/ping" slash command.
