const { lang } = require("../../config/config.json")
const connection_manager = require("../../js/connection_manager")
const text = require(`../../config/text_${lang}.json`).commands.join
const leave = require('./leave.js')

module.exports = {
    name: 'join',
    description: text.help,
    aliases: ['j', 'enter', 'start'],
    args: false,
    guildOnly: true,
    dmOnly: false,
    restricted: false,
    async execute(message, args) {
        const join_channel = message.member.voice.channel
        console.log(`Try to join into ${join_channel}`)

        if (join_channel) {
            message.channel.send(`Bot joins in channel *${join_channel.name}*`)
            const connection = await join_channel.join();
            connection_manager.connect(connection)
            console.log(`Bot successfully joins in ${join_channel.name} in guild ${message.guild}`)

            // cyclic check, if the bot is the only user in the voice channel. If true, he leaves
            const timerID = setInterval(function () {
                if (!join_channel) {
                    clearInterval(timerID)
                }

                if (join_channel.members.size === 1) {
                    leave.execute()
                    clearInterval(timerID)
                }

            }, 1000 * 60 * 5) // 5 Min

            // remove connection in connection_manager and event-listener when bot disconnect
            connection.on('disconnect', () => {
                clearInterval(timerID)
                connection_manager.disconnect()
                console.log('disconnect')
            })

        } else {
            message.reply(text.not_in_voice)
            console.log(`Bot failed joining`)
        }
    }
};