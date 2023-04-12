const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'getinfo',
    description: "Obten la información del bot.",
    type: ApplicationCommandType.ChatInput,
    cooldown: 10,
    run: async (client, interaction) => {
        // Instalamos la dependencia axios si no la tenemos (npm i axios)
        const axios = require("axios");

        let id = "botID"; //Aquí ponemos la ID del bot, se puede encontrar en el apartado de la API de tu bot
        let token = "ApiKey";//Aquí ponemos la API Key del bot, se puede encontrar en el apartado de la API de tu bot
        
        async function getinfo() {
            await axios(`https://bots.lucnodes.com/api/bots/${id}/getInfo`, {
                method: 'post',
                headers: {
                    Authorization: token
                }
            })
            .then((response) => { let embed = {
                fields: [
                    { 
                        name: 'Datos Principales:',
                        value: `**Nombre:** ${response.data.name}\n**DashID:** ${response.data.dashid}\n**Tipo de Bot:** ${response.data.free}\n**Renovación:** ${response.data.renovacion}\n**Presencia:** ${response.data.presence.actividad} || ${response.data.presence.estado}`
                    },
                    {
                        name: 'Comandos Predefinidos:',
                        value: `**AFK:** ${response.data.comandos.afk}\n**messageCounter:** ${response.data.comandos.messageCounter}\n**gay:** ${response.data.comandos.gay}\n**work:** ${response.data.comandos.work}\n**Bal:** ${response.data.comandos.bal}\n**bet:** ${response.data.comandos.bet}\n**rob:** ${response.data.comandos.rob}\n**AFK:** ${response.data.comandos.dep}\n**with:** ${response.data.comandos.with}\n**pay:** ${response.data.comandos.pay}\n**ban:** ${response.data.comandos.ban}\n**kick:** ${response.data.comandos.kick}\n**mute:** ${response.data.comandos.mute}\n**addroles:** ${response.data.comandos.addroles}\n**removeroles:** ${response.data.comandos.removeroles}\n**gstart:** ${response.data.comandos.gstart}\n**greroll:** ${response.data.comandos.greroll}\n**gend:** ${response.data.comandos.gend}\n**gpause:** ${response.data.comandos.gpause}\n**gresume:** ${response.data.comandos.gresume}\n**kiss:** ${response.data.comandos.kiss}\n**hug:** ${response.data.comandos.hug}\n**avatar:** ${response.data.comandos.avatar}`
                    }
                ],
                footer:{
                    text: 'Lucnodes Maker'
                },
                color: client.c.done
            }
            interaction.reply({ embeds: [embed] });
            console.log(response.data); })
            
            .catch((error) => { console.log(`No se pudo iniciar al bot:\n\n${error}`); });
        };
        
        getinfo();
    }
};