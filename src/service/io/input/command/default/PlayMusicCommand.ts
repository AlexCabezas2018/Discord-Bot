import {Command} from "../Command";
import {CommandInput} from "../../model/CommandInput";
import {CommandNames} from "../CommandNames";
import {Output} from "../../../output/model/Output";
import {AudioProviderFactory} from "../../../../providers/AudioProviderFactory";
import {AudioProviderInput} from "../../model/AudioProviderInput";

export class PlayMusicCommand extends Command {

    constructor() {
        super(CommandNames.PLAY_MUSIC_COMMAND);
    }

    execute(input: CommandInput): Output {
        const audioInput = new AudioProviderInput(input.args[0], input.meta);
        return AudioProviderFactory
            .getInstance()
            .getProvider(audioInput)
            .provide(audioInput);
    }
}
