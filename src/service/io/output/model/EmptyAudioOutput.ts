import {EmptyOutput} from "./EmptyOutput";
import {AudioOutputDisplay} from "../display/OutputDisplays";
import {AudioPlayerStatus} from "./AudioPlayerStatus";

export class EmptyAudioOutput extends EmptyOutput {

    private readonly status: AudioPlayerStatus

    constructor(status: AudioPlayerStatus, meta: Map<string, any>) {
        super(meta);
        this.status = status;
    }

    display(display: AudioOutputDisplay): void {
        if(this.status == AudioPlayerStatus.PAUSE) display.pause()
        else if(this.status == AudioPlayerStatus.RESUME) display.resume()
    }
}
