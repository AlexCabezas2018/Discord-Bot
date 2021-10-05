import {AudioProviderInput} from "../io/input/model/AudioProviderInput";
import {AudioOutput} from "../io/output/model/AudioOutput";

export interface AudioProvider {
    acceptInput(input: AudioProviderInput): boolean
    provide(input: AudioProviderInput): AudioOutput;
}
