import {Controller} from "./Controller";
import {PingCommand} from "../command/PingCommand";
import {CommandInputContext} from "../model/command/CommandInputContext";
import {Response} from "../response/Response";
import {PrintableResponse} from "../response/PrintableResponse";

export class CommandController implements Controller {
    private COMMANDS = [new PingCommand()]; // TODO find better way

    private static instance: CommandController;

    action(input: CommandInputContext): Response {
        try {
            const command = this.COMMANDS.find(command => command.handle(input.commandName));
            if(command === undefined) {
                return new PrintableResponse(`Command with name ${input.commandName} not found!`);
            }
            return command.execute(input);
        } catch (error: any) {
            return new PrintableResponse(`Error while executing command! ${error}`);
        }
    }

    static getInstance() {
        if(!this.instance) {
            this.instance = new CommandController();
        }
        return this.instance;
    }
}
