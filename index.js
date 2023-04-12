const fs = require('fs');
const { Client, GatewayIntentBits, Partials, Collection, Discord, ActionRowBuilder, ButtonBuilder, ButtonStyle,Events, EmbedBuilder, AttachmentBuilder, InteractionType } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });



client.commands = new Collection();
client.embeds = require('./data/config/embeds');
client.e = require('./data/config/emotes');
client.c = require('./data/config/colors');

module.exports = client;


fs.readdirSync('./handlers').forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});



client.login(process.env.BOT_TOKEN);