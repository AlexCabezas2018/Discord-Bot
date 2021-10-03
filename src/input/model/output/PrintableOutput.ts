import { Output } from "./Output";

export class PrintableOutput extends Output {
    private readonly _outputText: string

    constructor(outputText: string, meta: Map<string, any>) {
        super(meta);
        this._outputText = outputText;
    }

    get outputText(): string {
        return this._outputText;
    }
}
