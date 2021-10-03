import {AudioProvider} from "./AudioProvider";
import {AudioProviderInput} from "../io/input/model/AudioProviderInput";
import {AudibleOutput} from "../io/output/model/AudibleOutput";

export class YoutubeAudioProvider implements AudioProvider {
    private static MATCH_PATTERN = "youtube";


    provide(input: AudioProviderInput): AudibleOutput {
        return new AudibleOutput("Ella es callaita - Bad Bunny. " + input.url, new Map<string, any>());
    }

    acceptInput(input: AudioProviderInput): boolean {
        return input.url.includes(YoutubeAudioProvider.MATCH_PATTERN);
    }
}
