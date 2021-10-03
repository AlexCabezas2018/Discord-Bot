import { PrintableOutput } from "../model/output/PrintableOutput";

export interface PrintableResponseHandler {
    print(output: PrintableOutput): void;
}
