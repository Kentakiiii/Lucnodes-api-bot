const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'ping',
    description: "Comprueba mi ping.",
    type: ApplicationCommandType.ChatInput,
    cooldown: 10000,
    run: async (client, interaction) => {
        let embed = {
            description: `🏓 Latencia: \`${Math.round(client.ws.ping)} ms\``,
            color: client.c.done
        }
        interaction.reply({ embeds: [embed] });
    }
};