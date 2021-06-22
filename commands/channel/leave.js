const { lang } = require("../../config/config.json")
const connection_manager = require("../../js/connection_manager")
const text = require(`../../config/text_${lang}.json`).commands.leave

module.exports = {
    name: 'leave',
    description: text.help,
    aliases: ['l', 'destroy', 'genocide'],
    args: false,
    guildOnly: true,
    dmOnly: false,
    restricted: false,
    async execute(message, args) {
        const connection = connection_manager.get_connection()
        if (connection_manager.is_connected()) {
            await connection.disconnect()
            connection_manager.disconnect()
            connection_manager.remove_dispatcher()

        } else {
            message.reply("Bot isn't connected to a voice channel")

        }
    }
}