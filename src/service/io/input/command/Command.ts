import {CommandInput} from "../model/CommandInput";
import {Output} from "../../output/model/Output";
import {PrintableOutput} from "../../output/model/PrintableOutput";
import {CommandEvaluationOutput} from "../../output/model/CommandEvaluationOutput";
import {CommandEvaluationStatus} from "../../output/model/CommandEvaluationStatus";

export abstract class Command {

    protected readonly name : String;

    protected constructor(name: String) {
        this.name = name;
    }

    public handle(name: string) : boolean {
        return this.name === name;
    }

    public action(input: CommandInput): Output {
        const evaluation = this.onPreExecute(input);
        if(evaluation.status == CommandEvaluationStatus.SUCCESS) {
            return this.execute(input);
        }
        return evaluation;
    }

    abstract execute(input: CommandInput) : Output;

    public onPreExecute(input: CommandInput): CommandEvaluationOutput {
        return new CommandEvaluationOutput(CommandEvaluationStatus.SUCCESS);
    }
}
