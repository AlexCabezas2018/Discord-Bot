import {CommandInput} from "../../model/CommandInput";
import {MetaFields} from "../../util/MetaFields";
import {CommandEvaluationOutput} from "../../../output/model/CommandEvaluationOutput";
import {CommandEvaluationStatus} from "../../../output/model/CommandEvaluationStatus";
import {PauseCommand} from "../default/PauseCommand";

export class PauseDiscordCommand extends PauseCommand {

    public onPreExecute(input: CommandInput): CommandEvaluationOutput {
        if (input.meta.get(MetaFields.CURRENT_VOICE_CHANNEL) === undefined) {
            return new CommandEvaluationOutput(CommandEvaluationStatus.ERROR,
                "You are not in a voice channel! Please, join the voice channel to pause the music");
        }
        return new CommandEvaluationOutput(CommandEvaluationStatus.SUCCESS);
    }
}