import {Output} from "../model/Output";
import {PrintableOutput} from "../model/PrintableOutput";

export abstract class OutputDisplay {
    abstract display(output: Output): void;
}

export abstract class PrintableOutputDisplay extends OutputDisplay {
    abstract print(output: PrintableOutput): void
}
