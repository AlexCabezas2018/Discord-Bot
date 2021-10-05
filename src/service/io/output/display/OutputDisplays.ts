import {Output} from "../model/Output";
import {PrintableOutput} from "../model/PrintableOutput";
import {AudibleOutput} from "../model/AudibleOutput";

export interface OutputDisplay {
    display(output: Output): void;
}

export interface PrintableOutputDisplay extends OutputDisplay {
    print(output: PrintableOutput): void
}

export interface AudibleOutputDisplay extends OutputDisplay {
    play(output: AudibleOutput): void;
    pause(): void;
    resume(): void;
}

