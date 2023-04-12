const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'encender',
    description: "Enciende el BOT de Lucnodes.",
    type: ApplicationCommandType.ChatInput,
    cooldown: 10,
    run: async (client, interaction) => {
        // Instalamos la dependencia axios si no la tenemos (npm i axios)
        const axios = require("axios");

        let id = "ID_BOT"; //Aquí ponemos la ID del bot, se puede encontrar en el apartado de la API de tu bot
        let token = "APIKEY";//Aquí ponemos la API Key del bot, se puede encontrar en el apartado de la API de tu bot
        
        async function encenderbot() {
            await axios(`https://bots.lucnodes.com/api/bots/${id}/encender`, {
                method: 'post',
                headers: {
                    Authorization: token
                }
            })
            .then((response) => { console.log(response.data); })
            .catch((error) => { console.log(`No se pudo iniciar al bot:\n\n${error}`); });
        };
        
        encenderbot();

        let embed = {
            description: `Bot Encendido con éxito`,
            color: client.c.done
        }
        interaction.reply({ embeds: [embed] });
    }
};