import {AudioProviderInput} from "../io/input/model/AudioProviderInput";
import {AudibleOutput} from "../io/output/model/AudibleOutput";

export interface AudioProvider {
    acceptInput(input: AudioProviderInput): boolean
    provide(input: AudioProviderInput): AudibleOutput;
}
