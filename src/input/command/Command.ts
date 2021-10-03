import {CommandInput} from "../model/input/CommandInput";
import {Output} from "../model/output/Output";

export abstract class Command {

    protected readonly name : String;

    protected constructor(name: String) {
        this.name = name;
    }

    public handle(name: string) : boolean {
        return this.name === name;
    }

    abstract execute(input: CommandInput) : Output;
}
