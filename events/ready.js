const { ActivityType } = require('discord.js');
const client = require('..');


client.on('ready', () => {
    const activityList = [
        { name: `Lucnodes Hosting`, type: ActivityType.Watching }
    ];

    let i = 0;
    setInterval(() => {
        if (i >= activityList.length) i = 0;
        client.user.setActivity(activityList[i]);
        i++;
    }, 10000);

    console.log(`Activo como ${client.user.tag}`);
});