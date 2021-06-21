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
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            connection_manager.connect(connection)

        } else {
            message.reply("You have to be in a voice channel!")

        }
    }
};