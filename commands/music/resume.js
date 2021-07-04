const { lang } = require("../../config/config.json");
const text = require(`../../config/text_${lang}.json`).commands.resume;
const connection_manager = require("../../js/connection_manager")

module.exports = {
    name: 'resume',
    description: text.help,
    aliases: ['r', 'continue'],
    args: false,
    guildOnly: true,
    dmOnly: false,
    restricted: false,
    inVoice: true,
    sameChannel: true,
    execute(message, args) {
        if (connection_manager.is_dispatched()) {
            const dispatcher = connection_manager.get_dispatcher()

            if (dispatcher.paused) {
                connection_manager.get_dispatcher().resume()
                message.channel.send("Bot resumed")
            } else {
                message.channel.send("Bot already plays")
            }

        } else {
            message.reply(text.not_dispatched)
        }
    },
};