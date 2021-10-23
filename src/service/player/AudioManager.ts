import {AudioPlayer} from "./AudioPlayer";
import {AudioOutput} from "../io/output/model/AudioOutput";
import {PrintableOutput} from "../io/output/model/PrintableOutput";
import {EmptyAudioOutput} from "../io/output/model/EmptyAudioOutput";

export abstract class AudioManager {
    protected readonly players: Map<string, AudioPlayer>;

    protected constructor() {
        this.players = new Map<string, AudioPlayer>();
    }

    getPlayer(key: string | null) : AudioPlayer | undefined {
        if(!key) {
            return undefined;
        }
        return this.players.get(key);
    }

    abstract play(key: string, output: AudioOutput): PrintableOutput;
    abstract pause(key: string | null, output: EmptyAudioOutput): PrintableOutput;
    abstract resume(key: string | null, output: EmptyAudioOutput): PrintableOutput;
}

