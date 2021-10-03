import {Interaction} from "discord.js";
import {PrintableOutputDisplay} from "../OutputDisplay";

export abstract class DiscordOutputDisplay extends PrintableOutputDisplay {
    protected interaction: Interaction;

    constructor(interaction: Interaction) {
        super();
        this.interaction = interaction;
    }
}
