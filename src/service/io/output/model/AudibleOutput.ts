import {Output} from "./Output";
import {AudibleOutputDisplay} from "../display/OutputDisplays";

export class AudibleOutput extends Output {
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

    display(display: AudibleOutputDisplay): void {
        display.play(this);
    }
}
