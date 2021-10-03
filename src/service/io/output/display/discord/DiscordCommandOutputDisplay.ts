import {DiscordOutputDisplay} from "./DiscordOutputDisplay";
import {PrintableOutput} from "../../model/PrintableOutput";
import {CommandInteraction} from "discord.js";
import {AudibleOutputDisplay, PrintableOutputDisplay} from "../OutputDisplay";
import {AudibleOutput} from "../../model/AudibleOutput";
import {Output} from "../../model/Output";

export class DiscordCommandOutputDisplay extends DiscordOutputDisplay implements PrintableOutputDisplay, AudibleOutputDisplay {

    display(output: Output): void { }

    print(output: PrintableOutput): void {
        (this.interaction as CommandInteraction)
            .reply(output.outputText);
    }

    reproduce(output: AudibleOutput): void {
        (this.interaction as CommandInteraction)
            .reply(`Reproduciendo la canción con nombre: ${output.songName}`);
    }
}
