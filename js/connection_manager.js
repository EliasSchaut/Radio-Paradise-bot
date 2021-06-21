let connected = false
let connection_manager

let dispatched = false
let dispatcher


// ------------------------------
// connection
// ------------------------------
function get_connection() {
    return connection_manager
}

function connect(con) {
    connected = true
    connection_manager = con
}

function disconnect() {
    connection_manager = null
    connected = false
    remove_dispatcher()
}

function is_connected() {
    return connected
}
// ------------------------------


// ------------------------------
// dispatcher
// ------------------------------
function set_dispatcher(dis) {
    dispatcher = dis
    dispatched = true
}

function remove_dispatcher() {
    dispatcher = null
    dispatched = false
}

function is_dispatched() {
    if (!connected) {
        return false
    }

    return dispatched
}

function get_dispatcher() {
    return dispatcher
}
// ------------------------------

module.exports = {get_connection, connect, disconnect, is_connected,
    set_dispatcher, remove_dispatcher, is_dispatched, get_dispatcher}
