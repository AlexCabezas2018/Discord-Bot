import {CommandInteraction} from "discord.js";
import {CommandInput} from "../model/CommandInput";

export class InputMapper {
    static commandInputFromInteraction(interaction: CommandInteraction) : CommandInput {
        const args = interaction.options.data.map(argument => argument.value);
        return new CommandInput(interaction.commandName, args as string[], new Map<string, any> ());
    }
}
