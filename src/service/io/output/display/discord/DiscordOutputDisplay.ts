import {Interaction} from "discord.js";

export abstract class DiscordOutputDisplay {
    protected _interaction: Interaction;

    protected constructor(interaction: Interaction) {
        this._interaction = interaction;
    }
}

