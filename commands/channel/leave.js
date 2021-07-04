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
    inVoice: false,
    sameChannel: false,
    async execute(message, args) {
        const connection = connection_manager.get_connection()
        if (connection_manager.is_connected()) {
            // only execute if caller is in same channel or if bot is alone in channel
            if (connection.voice.channel.members.size !== 1) {
                if (message.member.voice.channel !== connection.voice.channel) {
                    //do not execute command
                    console.log(this.name + " command has been issued out of voice channel while bot was not alone!")
                    return message.reply(text.bot_not_alone_or_same_channel)
                }
            }
            await connection.disconnect()
            message.channel.send(`Bot left`)
            console.log(`Bot left`)
            // Event-Listener from join will now also execute

        } else {
            message.reply("bot isn't connected to a voice channel")
        }
    }
}