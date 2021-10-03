import {PingCommand} from "../PingCommand";

enum CommandNames {
    PING_COMMAND = "ping"
}

const commandList = [
    new PingCommand()
];

export { CommandNames, commandList }
