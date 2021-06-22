const { lang } = require("../../config/config.json")
const connection_manager = require("../../js/connection_manager")
const text = require(`../../config/text_${lang}.json`).commands.join

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
            const connection = await join_channel.join();
            connection_manager.connect(connection)

            message.channel.send(`Bot joins in channel *${join_channel.name}*`)
            console.log(`Bot successfully joins in ${join_channel.name} in guild ${message.guild}`)

        } else {
            message.reply(text.not_in_voice)
            console.log(`Bot failed joining`)
        }
    }
};