import {EmptyOutput} from "./EmptyOutput";
import {AudibleOutputDisplay} from "../display/OutputDisplays";
import {AudioPlayerStatus} from "./AudioPlayerStatus";

export class EmptyAudibleOutput extends EmptyOutput {

    private readonly status: AudioPlayerStatus

    constructor(status: AudioPlayerStatus, meta: Map<string, any>) {
        super(meta);
        this.status = status;
    }

    display(display: AudibleOutputDisplay): void {
        if(this.status == AudioPlayerStatus.PAUSE) display.pause()
        else if(this.status == AudioPlayerStatus.RESUME) display.resume()
    }
}
