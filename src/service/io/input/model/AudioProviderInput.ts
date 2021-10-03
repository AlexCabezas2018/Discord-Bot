import {Input} from "./Input";

export class AudioProviderInput extends Input {
    private readonly _url: string;

    constructor(url: string, meta: Map<string, any>) {
        super(meta);
        this._url = url;
    }

    get url(): string {
        return this._url;
    }
}
