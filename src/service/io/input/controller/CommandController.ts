import {Controller} from "./Controller";
import {CommandInput} from "../model/CommandInput";
import {Command} from "../command/Command";
import {Output} from "../../output/model/Output";
import {PrintableOutput} from "../../output/model/PrintableOutput";
import {CommandFactory} from "../command/CommandFactory";
import {MetaFields} from "../util/MetaFields";

export class CommandController implements Controller {

    private static instance: CommandController;

    action(input: CommandInput): Output {
        try {
            const commands = CommandFactory.getInstance().getCommands(input.meta.get(MetaFields.CLIENT_ID))
            const command = commands.find((command: Command) => command.handle(input.commandName));
            if(command === undefined) {
                return new PrintableOutput(`Command with name ${input.commandName} not found.`, new Map<string, any>());
            }
            return command.action(input);
        } catch (error) {
            return new PrintableOutput(`Error while executing command! ${error}`, new Map<string, any>());
        }
    }

    static getInstance() {
        if(!this.instance) {
            this.instance = new CommandController();
        }
        return this.instance;
    }
}
