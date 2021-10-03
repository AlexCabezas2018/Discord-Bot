import {Client as ApplicationClient} from "./Client";
import {Interaction} from "discord.js";
import {InputMapper} from "../input/util/InputMapper";
import {CommandController} from "../input/controller/CommandController";
import {DiscordCommandOutputDisplay} from "../output/display/discord/DiscordCommandOutputDisplay";
const { Client, Intents } = require('discord.js');

require("dotenv").config();

export class DiscordClient implements ApplicationClient {

    start(): void {
        const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
        client.login(process.env.DISCORD_TOKEN);

        client.once("ready", () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });

        client.on('interactionCreate', (interaction: Interaction) => {
            if (interaction.isCommand()) {
                const inputContext = InputMapper.commandInputFromInteraction(interaction);
                CommandController.getInstance().action(inputContext)
                    .display(new DiscordCommandOutputDisplay(interaction));
            }
        });
    }
}
