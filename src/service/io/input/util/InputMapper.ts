import {CommandInteraction} from "discord.js";
import {CommandInput} from "../model/CommandInput";

export class InputMapper {
    static commandInputFromInteraction(interaction: CommandInteraction, meta: Map<string, any>) : CommandInput {
        const args = interaction.options.data.map(argument => argument.value);
        return new CommandInput(interaction.commandName, args as string[], meta);
    }
}
