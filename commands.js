
var config = require('./config')

module.exports = {
    init: function () {
        console.log(config.username)
    },
    say: function (userState, message) {
        // Broadcaster only commands
        if (userState.username == config.broadname) {
            if (message == "!#") {
                client.say(config.broadname, "This is a broadcaster only command");
            }
        }

        // Moderator commands
        if (userState.mod == true) {
            if (message == "!$") {
                client.say(config.broadname, "This is a mod-only command!");
            }
        }

        // Commands that can be used by anyone
        if (message == "!") {
            client.say(config.broadname, "This command can be used by anyone!");
        }
    }
}



