import {DiscordOutputDisplay} from "./DiscordOutputDisplay";
import {PrintableOutput} from "../../model/PrintableOutput";
import {CommandInteraction, Interaction} from "discord.js";
import {AudioOutputDisplay, PrintableOutputDisplay} from "../OutputDisplays";
import {AudioOutput} from "../../model/AudioOutput";
import {Output} from "../../model/Output";
import {MetaFields} from "../../../input/util/MetaFields";
import {DiscordAudioManager} from "../../../../player/DiscordAudioManager";
import {EmptyAudioOutput} from "../../model/EmptyAudioOutput";

export class DiscordCommandOutputDisplay extends DiscordOutputDisplay implements PrintableOutputDisplay, AudioOutputDisplay {

    private static instance: DiscordCommandOutputDisplay;

    constructor(interaction: Interaction) {
        super(interaction);
    }

    display(output: Output): void { }

    print(output: PrintableOutput): void {
        (this._interaction as CommandInteraction)
            .reply(output.outputText);
    }

    play(output: AudioOutput): void {
        output.meta.set(MetaFields.VOICE_ADAPTER, this._interaction.guild?.voiceAdapterCreator);
        DiscordAudioManager.getInstance()
            .play(this._interaction.guildId || "", output)
            .display(this);
    }

    pause(output: EmptyAudioOutput): void {
        DiscordAudioManager.getInstance()
            .pause(this._interaction.guildId || "", output)
            .display(this);
    }

    resume(output: EmptyAudioOutput): void {
        DiscordAudioManager.getInstance()
            .resume(this._interaction.guildId || "", output)
            .display(this);
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
