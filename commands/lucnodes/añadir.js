const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'añadir',
    description: "Añade dinero a un usuario.",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'usuario',
            description: 'Elige al usuario al que añadir el dinero.',
            type: 6, //tipo usuario
            required: true
        },
        {
            name: 'cantidad',
            description: 'Cantidad a añadir al usuario.',
            type: 10,//tipo numero
            required: true
        }
    ],
    cooldown: 10,
    run: async (client, interaction) => {

        const user = interaction.options.getUser('usuario')
        const cantidad = interaction.options.getNumber('cantidad')

        const usuario = user.id
        const servidor = interaction.guild.id

        // Instalamos la dependencia axios si no la tenemos (npm i axios)

        const axios = require("axios");

        let id = "ID_BOT";//id del bot
        let token = "APIKEY";//api Key
        
        async function añadirmoneda() {
            await axios(`https://bots.lucnodes.com/api/bots/${id}/economia/addmoney/${servidor}/${usuario}/${cantidad}`, {
                method: 'post',
                headers: {
                    Authorization: token
                }
            })
            .then((response) => { console.log(response.data); })
            .catch((error) => { console.log(`No se pudo realizar la operación:\n\n${error}`); });
        };
        
        añadirmoneda();

        let embed = {
            description: `Se ha añadido ${cantidad} a ${user} (${usuario})`,
            color: client.c.done
        }
        interaction.reply({ embeds: [embed] });
    }
};