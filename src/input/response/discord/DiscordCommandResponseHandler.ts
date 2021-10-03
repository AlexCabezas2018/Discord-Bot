import { PrintableOutput } from "../../model/output/PrintableOutput";
import { CommandInteraction } from "discord.js";
import { PrintableResponseHandler } from "../PrintableResponseHandler";
import { ResponseHandler } from "../ResponseHandler";

export class DiscordCommandResponseHandler extends ResponseHandler {
    private static instance: DiscordCommandResponseHandler;

    private readonly interaction: CommandInteraction;

    constructor(interaction: CommandInteraction) {
        super();
        this.interaction = interaction;
    }

    print(output: PrintableOutput): void {
        this.interaction.reply(output.outputText);
    }

    static getInstance(interaction: CommandInteraction): DiscordCommandResponseHandler {
        if (!this.instance) {
            this.instance = new DiscordCommandResponseHandler(interaction);
        }
        return this.instance;
    }
}
