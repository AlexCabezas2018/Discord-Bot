import {CommandEvaluationStatus} from "./CommandEvaluationStatus";
import {PrintableOutput} from "./PrintableOutput";

export class CommandEvaluationOutput extends PrintableOutput {

    private readonly _status: CommandEvaluationStatus

    constructor(status: CommandEvaluationStatus, reason?: string) {
        super(reason ? reason : "", new Map<string, any>());
        this._status = status;
    }


    get status(): CommandEvaluationStatus {
        return this._status;
    }
}
