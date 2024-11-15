const config = {
    bot: { // Configuration for bot application
        token: "ClientToken",
        id: "ClientID",
        color_reply: [250, 64, 50], // red, green, blue

        commands_access: {
            setrole: "OWNER"
        },
    },
    server: { // Configuration for your ENet Server
        app_name: "Server.exe",
        name: "GrowPlus",
        reason_down: "Maintenance", // Default reason in announcement if server get down
    },
    discord: {
        status_server: "1234567890",   // channelID for showing status server
        announcement_server: "1234567890",    // channelID for showing status server
        notif: {    // Sending notifications in channelID
            down: { // When server get down
                status: true,
                channel: "1234567890"
            }
        }
    },
    path: {
        server: "C:/Users/Administrator/Desktop/GrowSoul/x64/Release",
        onlinePlayers: "online.txt",
        database_players: "database/players", // Path dir of players database
        database_worlds: "database/worlds",  // Path dir of worlds database
        database_guilds: "database/guilds"    // Path dir of worlds database
    },
    feature: {
        setrole: {
            PLAYER: [
                { // The first index is main key
                    key: "adminlevel",
                    value: 0
                } //,
                // {
                //     key: "blarney/0/time", // Support modify key inside the key
                //     value: 100
                // }
            ],
            VIP: [
                {
                    key: "adminlevel",
                    value: 3
                }
            ],
            VIPP: [
                {
                    key: "adminlevel",
                    value: 5
                }
            ],
            MOD: [
                {
                    key: "adminlevel",
                    value: 8
                }
            ],
            SMOD: [
                {
                    key: "adminlevel",
                    value: 10
                }
            ],
            DEV: [
                {
                    key: "adminlevel",
                    value: 12
                }
            ],
            SDEV: [
                {
                    key: "adminlevel",
                    value: 14
                }
            ],
            FOUNDER: [
                {
                    key: "adminlevel",
                    value: 28
                }
            ],
            STAFF: [
                {
                    key: "adminlevel",
                    value: 48
                }
            ],
            OWNER: [
                {
                    key: "adminlevel",
                    value: 50
                }
            ],
        }
    }
}

module.exports = config;