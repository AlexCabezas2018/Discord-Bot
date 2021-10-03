import {CommandInteraction} from "discord.js";
import {CommandInput} from "../model/CommandInput";

export class InputMapper {
    static commandInputFromInteraction(interaction: CommandInteraction) : CommandInput {
        return new CommandInput(interaction.commandName, []); // TODO
    }
}
