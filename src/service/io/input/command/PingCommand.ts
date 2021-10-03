import {Command} from "./Command";
import {CommandInput} from "../model/CommandInput";
import {CommandNames} from "./config/CommandsConfig";
import {Output} from "../../output/model/Output";
import {PrintableOutput} from "../../output/model/PrintableOutput";

export class PingCommand extends Command {

    constructor() {
        super(CommandNames.PING_COMMAND);
    }

    execute(input: CommandInput): Output {
        return new PrintableOutput("A ti te voy a responder, tssssss :(", new Map<string, any>())
    }
}
