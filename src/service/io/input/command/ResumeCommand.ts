import {Command} from "./Command";
import {CommandInput} from "../model/CommandInput";
import {Output} from "../../output/model/Output";
import {CommandNames} from "./config/CommandsConfig";
import {EmptyAudibleOutput} from "../../output/model/EmptyAudibleOutput";
import {AudioPlayerStatus} from "../../output/model/AudioPlayerStatus";

export class ResumeCommand extends Command {

    constructor() {
        super(CommandNames.RESUME_MUSIC_COMMAND);
    }

    execute(input: CommandInput): Output {
        return new EmptyAudibleOutput(AudioPlayerStatus.RESUME, input.meta);
    }
}
