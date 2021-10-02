import {Command} from "./Command";
import {CommandInputContext} from "../model/command/CommandInputContext";
import {Response} from "../response/Response";
import {PrintableResponse} from "../response/PrintableResponse";

export class PingCommand extends Command {
    constructor() {
        super("ping");
    }

    execute(input: CommandInputContext): Response {
        return new PrintableResponse("A ti te voy a responder, tssssss :(")
    }
}
