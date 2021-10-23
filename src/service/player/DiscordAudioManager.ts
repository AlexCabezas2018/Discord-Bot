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

    play(key: string | null, output: AudioOutput): PrintableOutput {
        let audioPlayer = this.getPlayer(key) as DiscordAudioPlayer;
        if(!audioPlayer) {
           audioPlayer = new DiscordAudioPlayer();
        }
        const channelId = output.meta.get(MetaFields.CURRENT_VOICE_CHANNEL);
        if(audioPlayer.status !== AudioPlayerStatus.ON_CHANNEL || audioPlayer.channel === channelId) {
            const connection = joinVoiceChannel({
                channelId: channelId,
                guildId: key || "",
                adapterCreator: output.meta.get(MetaFields.VOICE_ADAPTER),
            });
            audioPlayer.play(output.data, () => {
                audioPlayer.status = AudioPlayerStatus.AVAILABLE;
                audioPlayer.channel = undefined;
            });
            connection.subscribe(audioPlayer.player);
            audioPlayer.status = AudioPlayerStatus.ON_CHANNEL;
            audioPlayer.channel = channelId;
            this.players.set(key || "", audioPlayer);
            return new PrintableOutput(`Playing song ${output.songName}`, output.meta);
        }
        else {
            return new PrintableOutput("The player is on another voice channel! Wait for your turn! :)", output.meta)
        }
    }

    pause(key: string | null, output: EmptyAudioOutput): PrintableOutput {
        let audioPlayer = this.getPlayer(key) as DiscordAudioPlayer;
        if(!audioPlayer || !audioPlayer.channel) {
            return new PrintableOutput("No player is available to pause!");
        }
        if(audioPlayer.status == AudioPlayerStatus.PAUSED) {
            return new PrintableOutput("The player is already paused!");
        }
        const channelId = output.meta.get(MetaFields.CURRENT_VOICE_CHANNEL);
        if(!channelId) {
            return new PrintableOutput("You are not in a voice channel! Please, join the voice channel to pause the music");
        }
        if(audioPlayer.channel === channelId) {
            audioPlayer.pause();
            audioPlayer.status = AudioPlayerStatus.PAUSED
            return new PrintableOutput("Player paused!");
        }
        else {
            return new PrintableOutput("You are not in the same voice channel as the bot! Please join the voice channel to pause the player!")
        }
    }

    resume(key: string | null, output: EmptyAudioOutput): PrintableOutput {
        let audioPlayer = this.getPlayer(key) as DiscordAudioPlayer;
        if(!audioPlayer || !audioPlayer.channel) {
            return new PrintableOutput("No player is available to resume!");
        }

        const channelId = output.meta.get(MetaFields.CURRENT_VOICE_CHANNEL);
        if(!channelId) {
            return new PrintableOutput("You are not in a voice channel! Please, join the voice channel to resume the music");
        }

        if(audioPlayer.channel === channelId) {
            if(audioPlayer.status == AudioPlayerStatus.ON_CHANNEL) {
                return new PrintableOutput("The player is already playing music!");
            }
            audioPlayer.resume();
            audioPlayer.status = AudioPlayerStatus.ON_CHANNEL;
            return new PrintableOutput("Player resumed!");
        }
        else {
            return new PrintableOutput("You are not in the same voice channel as the bot! Please join the voice channel to resume the player!")
        }
    }

    static getInstance() {
        if(!this.instance) {
            this.instance = new DiscordAudioManager();
        }
        return this.instance;
    }
}
