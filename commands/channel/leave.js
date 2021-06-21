const { lang } = require("../../config/config.json");
const connection_manager = require("../../js/connection_manager");
const text = require(`../../config/text_${lang}.json`).commands.leave;

module.exports = {
    name: 'leave',
    description: text.help,
    aliases: [''],
    args: false,
    guildOnly: true,
    dmOnly: false,
    restricted: false,
    async execute(message, args) {
        const connection = connection_manager.get_connection()
        if (connection !== null) {
            await connection.disconnect()
            connection_manager.disconnect();
        }
    }
}