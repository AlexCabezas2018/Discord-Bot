import {Interaction} from "discord.js";
import {OutputDisplay} from "../OutputDisplay";
import {Output} from "../../model/Output";

export abstract class DiscordOutputDisplay implements OutputDisplay {
    protected interaction: Interaction;

    constructor(interaction: Interaction) {
        this.interaction = interaction;
    }

    abstract display(output: Output): void;
}

