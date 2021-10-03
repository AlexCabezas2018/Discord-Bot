import {AudioProvider} from "./AudioProvider";
import {AudioProviderInput} from "../io/input/model/AudioProviderInput";
import {AudibleOutput} from "../io/output/model/AudibleOutput";
const youtube = require('ytdl-core');

export class YoutubeAudioProvider implements AudioProvider {
    private static MATCH_PATTERN = "youtube";


    provide(input: AudioProviderInput): AudibleOutput {
        const video = youtube(input.url, { filter: 'audioonly' });
        return new AudibleOutput(input.url, video, input.meta);
    }

    acceptInput(input: AudioProviderInput): boolean {
        return input.url.includes(YoutubeAudioProvider.MATCH_PATTERN);
    }
}
