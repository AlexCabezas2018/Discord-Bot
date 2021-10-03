import {PlayMusicCommand} from "../PlayMusicCommand";
import {PauseCommand} from "../PauseCommand";
import {ResumeCommand} from "../ResumeCommand";

enum CommandNames {
    PLAY_MUSIC_COMMAND = "play",
    PAUSE_MUSIC_COMMAND = "pause",
    RESUME_MUSIC_COMMAND = "resume"
}

const commandList = [
    new PlayMusicCommand(),
    new PauseCommand(),
    new ResumeCommand()
];

export { CommandNames, commandList }
