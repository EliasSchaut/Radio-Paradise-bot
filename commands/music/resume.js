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
    execute(message, args) {
        if (connection_manager.is_dispatched()) {
            connection_manager.get_dispatcher().resume()
        }
    },
};