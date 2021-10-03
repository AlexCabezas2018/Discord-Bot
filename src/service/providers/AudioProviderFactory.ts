import {AudioProvider} from "./AudioProvider";
import {AudioProviderInput} from "../io/input/model/AudioProviderInput";
import {YoutubeAudioProvider} from "./YoutubeAudioProvider";

export class AudioProviderFactory {
    private static instance: AudioProviderFactory;

    getProvider(input: AudioProviderInput) : AudioProvider {
        const provider = AudioProviderFactory
            .getProviders()
            .find(provider => provider.acceptInput(input))

        if(provider == null) {
            throw Error(`No content provider was found for link: ${input.url}`);
        }

        return provider;
    }

    static getInstance() {
        if(!this.instance) {
            this.instance = new AudioProviderFactory();
        }
        return this.instance;
    }

    private static getProviders() : AudioProvider[] {
        return [
            new YoutubeAudioProvider()
        ];
    }
}
