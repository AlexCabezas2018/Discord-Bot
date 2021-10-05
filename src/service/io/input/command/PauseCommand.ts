import {Command} from "./Command";
import {CommandInput} from "../model/CommandInput";
import {Output} from "../../output/model/Output";
import {CommandNames} from "./config/CommandsConfig";
import {EmptyAudibleOutput} from "../../output/model/EmptyAudibleOutput";
import {AudioPlayerStatus} from "../../output/model/AudioPlayerStatus";

export class PauseCommand extends Command {

    constructor() {
        super(CommandNames.PAUSE_MUSIC_COMMAND);
    }

    execute(input: CommandInput): Output {
        return new EmptyAudibleOutput(AudioPlayerStatus.PAUSE, input.meta);
    }
}
