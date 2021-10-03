import {Interaction} from "discord.js";
import {OutputDisplay} from "../OutputDisplay";
import {Output} from "../../model/Output";

export abstract class DiscordOutputDisplay implements OutputDisplay {
    protected _interaction: Interaction;

    protected constructor(interaction: Interaction) {
        this._interaction = interaction;
    }

    abstract display(output: Output): void;
}

