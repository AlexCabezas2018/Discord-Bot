import {Command} from "../Command";
import {CommandInput} from "../../model/CommandInput";
import {Output} from "../../../output/model/Output";
import {CommandNames} from "../CommandNames";
import {EmptyAudioOutput} from "../../../output/model/EmptyAudioOutput";
import {AudioPlayerStatus} from "../../../output/model/AudioPlayerStatus";

export class ResumeCommand extends Command {

    constructor() {
        super(CommandNames.RESUME_MUSIC_COMMAND);
    }

    execute(input: CommandInput): Output {
        return new EmptyAudioOutput(AudioPlayerStatus.RESUME, input.meta);
    }
}
