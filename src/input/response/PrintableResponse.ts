import {Response} from "./Response";
import {CommandInteraction} from "discord.js";

export class PrintableResponse implements Response {
    private readonly text: string

    constructor(text: string) {
        this.text = text;
    }

    run(interaction: CommandInteraction): void {
        interaction.reply(this.text);
    }
}
