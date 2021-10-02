import {Interaction} from "discord.js";

export interface Response {
    run(interaction: Interaction): void;
}
