import {DiscordOutputDisplay} from "./DiscordOutputDisplay";
import {PrintableOutput} from "../../model/PrintableOutput";
import {CommandInteraction} from "discord.js";
import {AudibleOutputDisplay, PrintableOutputDisplay} from "../OutputDisplay";
import {AudibleOutput} from "../../model/AudibleOutput";
import {Output} from "../../model/Output";
import {MetaFields} from "../../../input/util/MetaFields";
const {
    AudioPlayerStatus,
    StreamType,
    createAudioPlayer,
    createAudioResource,
    joinVoiceChannel,
} = require('@discordjs/voice');

export class DiscordCommandOutputDisplay extends DiscordOutputDisplay implements PrintableOutputDisplay, AudibleOutputDisplay {

    display(output: Output): void { }

    print(output: PrintableOutput): void {
        (this.interaction as CommandInteraction)
            .reply(output.outputText);
    }

    reproduce(output: AudibleOutput): void {
        const connection = joinVoiceChannel({
            channelId: output.meta.get(MetaFields.CURRENT_VOICE_CHANNEL),
            guildId: this.interaction.guildId,
            adapterCreator: this.interaction.guild?.voiceAdapterCreator,
        });

        const resource = createAudioResource(output.data, { inputType: StreamType.Arbitrary });
        const player = createAudioPlayer();

        player.play(resource);

        connection.subscribe(player);

        player.on(AudioPlayerStatus.Idle, () => connection.destroy());

        (this.interaction as CommandInteraction)
            .reply(`Playing song ${output.songName}`);
    }
}
