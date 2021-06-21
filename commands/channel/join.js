const { lang } = require("../../config/config.json");
const connection_manager = require("../../js/connection_manager");
const text = require(`../../config/text_${lang}.json`).commands.join;

module.exports = {
    name: 'join',
    description: text.help,
    aliases: [''],
    args: false,
    guildOnly: true,
    dmOnly: false,
    restricted: false,
    async execute(message, args) {
        const voice_channel = await message.guild.channels.cache.get("801473859656089673")
        const connection = await voice_channel.join();
        connection_manager.connect(connection);
    },
};