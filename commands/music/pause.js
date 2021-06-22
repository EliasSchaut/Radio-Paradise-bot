const { lang } = require("../../config/config.json");
const text = require(`../../config/text_${lang}.json`).commands.pause;
const connection_manager = require("../../js/connection_manager")

module.exports = {
    name: 'pause',
    description: text.help,
    aliases: ['s', 'stop'],
    args: false,
    guildOnly: true,
    dmOnly: false,
    restricted: false,
    execute(message, args) {
        if (connection_manager.is_dispatched()) {
            const dispatcher = connection_manager.get_dispatcher()

            if (!dispatcher.isPaused()) {
                connection_manager.get_dispatcher().pause()
                message.channel.send("Bot paused")
            } else {
                message.channel.send("Bot already paused")
            }

        } else {
            message.reply(text.not_dispatched)
        }
    },
};