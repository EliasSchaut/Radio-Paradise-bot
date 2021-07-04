const { lang } = require("../../config/config.json")
const connection_manager = require("../../js/connection_manager")
const chooser = require("../../js/stream_chooser")
const join = require("../channel/join")
const text = require(`../../config/text_${lang}.json`).commands.play

module.exports = {
    name: 'play',
    description: text.help,
    aliases: ['p'],
    args: false,
    usage: text.usage,
    guildOnly: true,
    dmOnly: false,
    restricted: false,
    inVoice: true,
    sameChannel: false,
    async execute(message, args) {

        // bot is not in a voice channel
        if (!message.guild.me.voice.channel) {
            console.log("bot is not in a voice channel")
            await join.execute(message)
        }

        // bot is in a voice channel, but the connection is not safed in the connection manager
        if (!connection_manager.is_connected()) {
            console.log("Bot is in a voice channel, but the connection is not saved in the connection manager")
            connection_manager.connect(await message.guild.me.voice.channel.join())
        }

        const connection = connection_manager.get_connection()

        //check if caller is in same channel as bot
        if (!(message.member.voice.channel === connection.voice.channel)) {
            console.log("user " + message.author.username + " used the " + this.name + " command outside of the channel this bot is connected to")
            message.channel.send("you have to be in the same channel as the bot to use this command")
            return
        }

        const stream = chooser.choose(args)
        console.log("Try to start playback from source " + stream)
        const dispatcher = await connection.play(stream)
        console.log("Playback initiated")
        connection_manager.set_dispatcher(dispatcher)

        dispatcher.on('start', () => {
            message.channel.send("Start playing")
            console.log('Successfully started playback!');
        })

        dispatcher.on('error', () => {
            console.error('An error accrued from dispatcher')
        })
    },
};