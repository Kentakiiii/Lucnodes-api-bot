const c = require('./colors');
const e = require('./emotes');

module.exports.loading = {
    embeds: [
        {
            description: e.pending + 'Cargando...',
            color: c.pending,
        }
    ]
}

module.exports.cooldown = (duration) => {
    return {
        embeds: [
            {
                description: e.pending + `Ahora tienes \`${duration}\`s de cooldown.`,
                color: c.pending
            }
        ]
    }
}

module.exports.fail = (desc) => {
    return {
        embeds: [
            {
                description: e.fail + desc,
                color: c.fail
            }
        ]
    }
}

module.exports.error = {
    embeds: [
        {
            description: e.error + 'Oh no, algo ha fallado..',
            color: c.error
        }
    ]
}

module.exports.done = (desc) => {
    return {
        embeds: [
            {
                description: e.done + desc,
                color: c.done
            }
        ]
    }
}