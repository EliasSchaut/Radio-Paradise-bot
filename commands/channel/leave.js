const { lang } = require("../../config/config.json")
const connection_manager = require("../../js/connection_manager")
const text = require(`../../config/text_${lang}.json`).commands.leave

module.exports = {
    name: 'leave',
    description: text.help,
    aliases: ['l', 'dc', 'destroy', 'genocide', 'disconnect'],
    args: false,
    guildOnly: true,
    dmOnly: false,
    restricted: false,
    async execute(message, args) {
        const connection = connection_manager.get_connection()
        if (connection_manager.is_connected()) {
            message.channel.send(`Bot left`)
            await connection.disconnect()
            console.log(`Bot left`)
            // Event-Listener from join will now also execute

        } else {
            message.reply("bot isn't connected to a voice channel")
        }
    }
}