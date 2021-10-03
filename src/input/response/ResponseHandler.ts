import { Output } from "../model/output/Output";
import { PrintableOutput } from "../model/output/PrintableOutput";
import { PrintableResponseHandler } from "./PrintableResponseHandler";

export abstract class ResponseHandler implements PrintableResponseHandler {
    handle(output: Output): void {
        if (output instanceof PrintableOutput) {
            this.print(output as PrintableOutput);
        }
    }

    abstract print(output: PrintableOutput): void;
}
