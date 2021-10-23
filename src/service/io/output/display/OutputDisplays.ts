import {Output} from "../model/Output";
import {PrintableOutput} from "../model/PrintableOutput";
import {AudioOutput} from "../model/AudioOutput";
import {EmptyAudioOutput} from "../model/EmptyAudioOutput";

export interface OutputDisplay {
    display(output: Output): void;
}

export interface PrintableOutputDisplay extends OutputDisplay {
    print(output: PrintableOutput): void
}

export interface AudioOutputDisplay extends OutputDisplay {
    play(output: AudioOutput): void;
    pause(output: EmptyAudioOutput): void;
    resume(output: EmptyAudioOutput): void;
}

