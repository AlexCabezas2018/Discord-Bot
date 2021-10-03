import {EmptyOutput} from "./EmptyOutput";
import {AudibleOutputDisplay} from "../display/OutputDisplay";
import {AudibleStatus} from "./AudibleStatus";

export class EmptyAudibleOutput extends EmptyOutput {

    private readonly status: AudibleStatus

    constructor(status: AudibleStatus, meta: Map<string, any>) {
        super(meta);
        this.status = status;
    }

    display(display: AudibleOutputDisplay): void {
        if(this.status == AudibleStatus.PAUSE) display.pause()
        else if(this.status == AudibleStatus.RESUME) display.resume()
    }
}
