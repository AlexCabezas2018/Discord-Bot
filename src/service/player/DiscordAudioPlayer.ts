import {AudioPlayer as Player, AudioPlayerStatus as DiscordPlayerStatus} from "@discordjs/voice";
import {AudioPlayer} from "./AudioPlayer";
const {
    StreamType,
    createAudioPlayer,
    createAudioResource,
} = require('@discordjs/voice');

export class DiscordAudioPlayer extends AudioPlayer {
    private readonly _player: Player;
    private _channel: string | undefined;

    constructor() {
        super();
        this._player = createAudioPlayer();
    }

    get player(): Player {
        return this._player;
    }

    set channel(value: string | undefined) {
        this._channel = value;
    }

    get channel(): string | undefined {
        return this._channel;
    }

    play(data: any, onFinishSong: Function): void {
        const resource = createAudioResource(data, { inputType: StreamType.Arbitrary });
        this.player.play(resource);
        this.player.on(DiscordPlayerStatus.Idle, () => onFinishSong());
    }

    resume(): void {
        this.player.unpause();
    }

    pause(): void {
        this.player.pause();
    }

}
