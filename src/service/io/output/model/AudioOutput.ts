import {Output} from "./Output";
import {AudioOutputDisplay} from "../display/OutputDisplays";

export class AudioOutput extends Output {
    private readonly _songName: string;
    private readonly _data: any

    constructor(songName: string, data: any,  meta: Map<string, any>) {
        super(meta);
        this._songName = songName;
        this._data = data;
    }

    get songName(): string {
        return this._songName;
    }

    get data(): any {
        return this._data;
    }

    display(display: AudioOutputDisplay): void {
        display.play(this);
    }
}
