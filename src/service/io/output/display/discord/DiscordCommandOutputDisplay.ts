import {DiscordOutputDisplay} from "./DiscordOutputDisplay";
import {PrintableOutput} from "../../model/PrintableOutput";
import {CommandInteraction, Interaction} from "discord.js";
import {AudioOutputDisplay, PrintableOutputDisplay} from "../OutputDisplays";
import {AudioOutput} from "../../model/AudioOutput";
import {Output} from "../../model/Output";
import {MetaFields} from "../../../input/util/MetaFields";
import {AudioPlayer} from "@discordjs/voice";
const {
    AudioPlayerStatus,
    StreamType,
    createAudioPlayer,
    createAudioResource,
    joinVoiceChannel,
} = require('@discordjs/voice');

export class DiscordCommandOutputDisplay extends DiscordOutputDisplay implements PrintableOutputDisplay, AudioOutputDisplay {

    private readonly player: AudioPlayer;

    private static instance: DiscordCommandOutputDisplay;

    constructor(interaction: Interaction) {
        super(interaction);
        this.player = createAudioPlayer();
    }


    display(output: Output): void { }

    print(output: PrintableOutput): void {
        (this._interaction as CommandInteraction)
            .reply(output.outputText);
    }

    play(output: AudioOutput): void {
        const connection = joinVoiceChannel({
            channelId: output.meta.get(MetaFields.CURRENT_VOICE_CHANNEL),
            guildId: this._interaction.guildId,
            adapterCreator: this._interaction.guild?.voiceAdapterCreator,
        });

        const resource = createAudioResource(output.data, { inputType: StreamType.Arbitrary });

        this.player.play(resource);

        connection.subscribe(this.player);

        this.player.on(AudioPlayerStatus.Idle, () => connection.destroy());

        (this._interaction as CommandInteraction)
            .reply(`Playing song ${output.songName}`);
    }

    pause(): void {
        this.player.pause();
        (this._interaction as CommandInteraction)
            .reply('Paused :)');
    }

    resume(): void {
        this.player.unpause();
        (this._interaction as CommandInteraction)
            .reply('Resumed! :)');
    }

    static getInstance(interaction: Interaction) {
        if(!this.instance) {
            this.instance = new DiscordCommandOutputDisplay(interaction);
        }
        else {
            this.instance._interaction = interaction;
        }
        return this.instance;
    }
}
