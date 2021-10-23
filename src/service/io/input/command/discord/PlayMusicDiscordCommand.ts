import {PlayMusicCommand} from "../default/PlayMusicCommand";
import {CommandInput} from "../../model/CommandInput";
import {MetaFields} from "../../util/MetaFields";
import {CommandEvaluationOutput} from "../../../output/model/CommandEvaluationOutput";
import {CommandEvaluationStatus} from "../../../output/model/CommandEvaluationStatus";

export class PlayMusicDiscordCommand extends PlayMusicCommand {

    public onPreExecute(input: CommandInput): CommandEvaluationOutput {
        if (input.meta.get(MetaFields.CURRENT_VOICE_CHANNEL) === undefined) {
            return new CommandEvaluationOutput(CommandEvaluationStatus.ERROR, "You are not in any voice channel! Please, join to a voice channel and try again!");
        }
        return new CommandEvaluationOutput(CommandEvaluationStatus.SUCCESS);
    }
}
