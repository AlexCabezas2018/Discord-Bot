import {Output} from "../model/Output";
import {PrintableOutput} from "../model/PrintableOutput";
import {AudioOutput} from "../model/AudioOutput";

export interface OutputDisplay {
    display(output: Output): void;
}

export interface PrintableOutputDisplay extends OutputDisplay {
    print(output: PrintableOutput): void
}

export interface AudioOutputDisplay extends OutputDisplay {
    play(output: AudioOutput): void;
    pause(): void;
    resume(): void;
}

