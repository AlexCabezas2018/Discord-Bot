import {Output} from "./Output";
import {PrintableOutputDisplay} from "../display/OutputDisplays";

export class PrintableOutput extends Output {
    private readonly _outputText: string

    constructor(outputText: string, meta?: Map<string, any>) {
        super(meta || new Map<string, any> ());
        this._outputText = outputText;
    }

    get outputText(): string {
        return this._outputText;
    }

    display(display: PrintableOutputDisplay): void {
        display.print(this);
    }
}
