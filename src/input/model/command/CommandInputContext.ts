import {InputContext} from "../InputContext";

export class CommandInputContext extends InputContext {
    private readonly _commandName: string;
    private readonly _args: string[];

    constructor(commandName: string, args: string[]) {
        super();
        this._commandName = commandName;
        this._args = args;
    }

    get commandName(): string {
        return this._commandName;
    }

    get args(): string[] {
        return this._args;
    }
}
