import { Interaction } from "discord.js";
import { CommandController } from "./input/controller/CommandController";
import { InputMapper } from "./input/util/InputMapper";
import { DiscordCommandResponseHandler } from "./input/response/discord/DiscordCommandResponseHandler";
import { PrintableOutput } from "./input/model/output/PrintableOutput";

require("dotenv").config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('interactionCreate', (interaction: Interaction) => {
    if (interaction.isCommand()) {
        const inputContext = InputMapper.commandInputFromInteraction(interaction);
        const output = CommandController.getInstance().action(inputContext);
        DiscordCommandResponseHandler.getInstance(interaction).handle(output);
    }
});
