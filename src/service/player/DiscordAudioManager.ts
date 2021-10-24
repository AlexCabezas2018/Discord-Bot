import {AudioManager} from "./AudioManager";
import {DiscordAudioPlayer} from "./DiscordAudioPlayer";
import {AudioPlayerStatus} from "./AudioPlayerStatus";
import {joinVoiceChannel} from "@discordjs/voice";
import {MetaFields} from "../io/input/util/MetaFields";
import {AudioOutput} from "../io/output/model/AudioOutput";
import {PrintableOutput} from "../io/output/model/PrintableOutput";
import {EmptyAudioOutput} from "../io/output/model/EmptyAudioOutput";


export class DiscordAudioManager extends AudioManager {

    private static instance: DiscordAudioManager;

    play(key: string, output: AudioOutput): PrintableOutput {
        let audioPlayer = this.getPlayer(key) as DiscordAudioPlayer;
        if(!audioPlayer) {
           audioPlayer = new DiscordAudioPlayer();
        }
        const channelId = output.meta.get(MetaFields.CURRENT_VOICE_CHANNEL);
        if(audioPlayer.status !== AudioPlayerStatus.PLAYING || audioPlayer.channel === channelId) {
            const connection = joinVoiceChannel({
                channelId: channelId,
                guildId: key,
                adapterCreator: output.meta.get(MetaFields.VOICE_ADAPTER),
            });
            audioPlayer.play(output.data, () => {
                connection.destroy();
                audioPlayer.status = AudioPlayerStatus.AVAILABLE;
                audioPlayer.channel = undefined;
            });
            connection.subscribe(audioPlayer.player);
            audioPlayer.status = AudioPlayerStatus.PLAYING;
            audioPlayer.channel = channelId;
            this.players.set(key, audioPlayer);
            return new PrintableOutput(`Playing song ${output.songName}`, output.meta);
        }
        else {
            return new PrintableOutput("The player is on another voice channel! Wait for your turn! :)", output.meta)
        }
    }

    pause(key: string, output: EmptyAudioOutput): PrintableOutput {
        return this.changePlayerStatus(
            key,
            AudioPlayerStatus.PAUSED,
            output,
            (audioPlayer: DiscordAudioPlayer) => {
                audioPlayer.pause();
                audioPlayer.status = AudioPlayerStatus.PAUSED
                return new PrintableOutput("Player paused!");
            }
        );
    }

    resume(key: string, output: EmptyAudioOutput): PrintableOutput {
        return this.changePlayerStatus(
            key,
            AudioPlayerStatus.PLAYING,
            output,
            (audioPlayer: DiscordAudioPlayer) => {
                audioPlayer.resume();
                audioPlayer.status = AudioPlayerStatus.PLAYING;
                return new PrintableOutput("Player resumed!");
            }
        );
    }

    private changePlayerStatus(key: string, newStatus: AudioPlayerStatus,
                               output: EmptyAudioOutput, inChannelCallback: Function): PrintableOutput {

        let audioPlayer = this.getPlayer(key) as DiscordAudioPlayer;
        if(!audioPlayer || !audioPlayer.channel) {
            return new PrintableOutput("No player is available to resume!");
        }
        const channelId = output.meta.get(MetaFields.CURRENT_VOICE_CHANNEL);
        if(audioPlayer.isInChannel(channelId)) {
            if(audioPlayer.status == newStatus) {
                return new PrintableOutput("The player is already in use!");
            }
            return inChannelCallback(audioPlayer);
        }
        else {
            return new PrintableOutput("You are not in the same voice channel as the bot! Please join the voice channel and try again!")
        }
    }

    static getInstance() {
        if(!this.instance) {
            this.instance = new DiscordAudioManager();
        }
        return this.instance;
    }
}
