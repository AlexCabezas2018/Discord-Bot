import {OutputDisplay} from "../display/OutputDisplays";

export abstract class Output {
    private readonly _meta: Map<string, any>

    protected constructor(meta: Map<string, any>) {
        this._meta = meta;
    }

    get meta(): Map<string, any> {
        return this._meta;
    }

    abstract display(display: OutputDisplay): void;
}
