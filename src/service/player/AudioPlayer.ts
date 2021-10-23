import {AudioPlayerStatus} from "./AudioPlayerStatus";

export abstract class AudioPlayer {
    private _status: AudioPlayerStatus;

    protected constructor() {
        this._status = AudioPlayerStatus.AVAILABLE;
    }


    get status(): AudioPlayerStatus {
        return this._status;
    }


    set status(value: AudioPlayerStatus) {
        this._status = value;
    }

    abstract play(data: any, callback: Function): void;
    abstract resume(): void;
    abstract pause(): void;
}
