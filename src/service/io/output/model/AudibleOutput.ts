import {Output} from "./Output";
import {AudibleOutputDisplay} from "../display/OutputDisplay";

export class AudibleOutput extends Output {
    private readonly _songName: string;

    constructor(songName: string, meta: Map<string, any>) {
        super(meta);
        this._songName = songName;
    }

    get songName(): string {
        return this._songName;
    }

    display(display: AudibleOutputDisplay): void {
        display.reproduce(this);
    }
}
