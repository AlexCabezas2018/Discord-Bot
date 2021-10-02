import {CommandInteraction} from "discord.js";
import {CommandInputContext} from "../model/command/CommandInputContext";

export class InputMapper {
    static commandInputFromInteraction(interaction: CommandInteraction) : CommandInputContext {
        return new CommandInputContext(interaction.commandName, []); // TODO
    }
}
