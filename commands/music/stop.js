const { lang } = require("../../config/config.json");
const text = require(`../../config/text_${lang}.json`).commands.stop;

module.exports = {
    name: 'stop',
    description: text.help,
    aliases: [''],
    args: true,
    usage: text.usage,
    args_min_length: 1,
    guildOnly: false,
    dmOnly: false,
    restricted: false,
    execute(message, args) {
        message.channel.send(`${args}`);
    },
};