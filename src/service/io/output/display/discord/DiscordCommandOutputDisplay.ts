import {DiscordOutputDisplay} from "./DiscordOutputDisplay";
import {Output} from "../../model/Output";
import {PrintableOutput} from "../../model/PrintableOutput";
import {CommandInteraction} from "discord.js";

export class DiscordCommandOutputDisplay extends DiscordOutputDisplay {

    display(output: Output): void {
        // TODO: give some answer using the meta
    }

    print(output: PrintableOutput): void {
        (this.interaction as CommandInteraction)
            .reply(output.outputText);
    }
}
