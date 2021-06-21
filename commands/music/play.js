const { lang, stream_links } = require("../../config/config.json")
const connection_manager = require("../../js/connection_manager")
const chooser = require("../../js/stream_chooser")
const join = require("../channel/join")
const text = require(`../../config/text_${lang}.json`).commands.play

module.exports = {
    name: 'play',
    description: text.help,
    aliases: ['p'],
    args: false,
    usage: text.usage,
    guildOnly: true,
    dmOnly: false,
    restricted: false,
    async execute(message, args) {
        if (!connection_manager.is_connected()) {
            await join.execute(message)
        }
        const connection = connection_manager.get_connection()

        const stream = chooser.choose(args)
        const dispatcher = connection.play(stream)
        connection_manager.set_dispatcher(dispatcher)
    },
};