import {CommandInput} from "../model/CommandInput";
import {Output} from "../../output/model/Output";

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
