import {AudioProvider} from "./AudioProvider";
import {AudioProviderInput} from "../io/input/model/AudioProviderInput";
import {AudioOutput} from "../io/output/model/AudioOutput";
const youtube = require('ytdl-core');

export class YoutubeAudioProvider implements AudioProvider {
    private static MATCH_PATTERN = "youtube";


    provide(input: AudioProviderInput): AudioOutput {
        const video = youtube(input.url, { filter: 'audioonly' });
        return new AudioOutput(input.url, video, input.meta);
    }

    acceptInput(input: AudioProviderInput): boolean {
        return input.url.includes(YoutubeAudioProvider.MATCH_PATTERN);
    }
}
