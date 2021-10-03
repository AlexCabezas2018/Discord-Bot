import {Command} from "./Command";
import {CommandInput} from "../model/CommandInput";
import {CommandNames} from "./config/CommandsConfig";
import {Output} from "../../output/model/Output";
import {AudibleOutput} from "../../output/model/AudibleOutput";

export class PlayMusicCommand extends Command {

    constructor() {
        super(CommandNames.PLAY_MUSIC_COMMAND);
    }

    execute(input: CommandInput): Output {
        return new AudibleOutput("Ella es callaita - Bad bunny", new Map<string, any>());
    }
}
