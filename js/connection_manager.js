let connected = false
let connection_manager = null


function get_connection() {
    return connection_manager
}

function connect(val) {
    connected = true
    connection_manager = val
}

function disconnect() {
    connection_manager = null
    connected = false
}

function is_connected() {
    return connected
}

module.exports = {get_connection, connect, disconnect, is_connected}
