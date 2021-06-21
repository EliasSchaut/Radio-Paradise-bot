const { lang } = require("../../config/config.json");
const text = require(`../../config/text_${lang}.json`).commands.pause;
const connection_manager = require("../../js/connection_manager")

module.exports = {
    name: 'pause',
    description: text.help,
    aliases: ['stop'],
    args: false,
    guildOnly: true,
    dmOnly: false,
    restricted: false,
    execute(message, args) {
        if (connection_manager.is_dispatched()) {
            connection_manager.get_dispatcher().pause()
        }
    },
};