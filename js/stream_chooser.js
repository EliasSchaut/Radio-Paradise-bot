const { stream_links, _default } = require("../config/config.json")

function choose(args) {
    let channel = _default.channel
    let quality = _default.quality

    if (args.length > 0) {
        if (args[0] in stream_links) {
            channel = args[0]

            if ((args.length > 1) && (args[1] in stream_links[channel])) {
                quality = args[1]
            }
        }
    }

    return get_stream(channel, quality)
}


function get_stream(channel, quality) {
    return stream_links[channel][quality]
}

module.exports = {choose}
