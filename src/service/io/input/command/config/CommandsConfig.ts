import {PlayMusicCommand} from "../PlayMusicCommand";

enum CommandNames {
    PLAY_MUSIC_COMMAND = "play"
}

const commandList = [
    new PlayMusicCommand()
];

export { CommandNames, commandList }
