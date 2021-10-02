import {CommandInputContext} from "../model/command/CommandInputContext";
import {Response} from "../response/Response";

export abstract class Command {

    protected readonly name : String;

    protected constructor(name: String) {
        this.name = name;
    }

    public handle(name: string) : boolean {
        return this.name === name;
    }

    abstract execute(input: CommandInputContext) : Response;
}
