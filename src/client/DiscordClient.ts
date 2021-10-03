import {ApplicationClient} from "./ApplicationClient";
import {Interaction} from "discord.js";
import {InputMapper} from "../service/io/input/util/InputMapper";
import {CommandController} from "../service/io/input/controller/CommandController";
import {DiscordCommandOutputDisplay} from "../service/io/output/display/discord/DiscordCommandOutputDisplay";
import {MetaFields} from "../service/io/input/util/MetaFields";
const { Client, Intents } = require('discord.js');

require("dotenv").config();

export class DiscordClient implements ApplicationClient {

    start(): void {
        const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES ] });
        client.login(process.env.DISCORD_TOKEN);

        client.once("ready", () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });

        client.on('interactionCreate', (interaction: Interaction) => {
            if (interaction.isCommand()) {
                const guild = client.guilds.cache.get(interaction.guildId);
                const member = guild.members.cache.get(interaction.member?.user.id)
                const channelId = member.voice.channel.id;

                const meta = new Map<string, any>();
                meta.set(MetaFields.CURRENT_VOICE_CHANNEL, channelId);

                const inputContext = InputMapper.commandInputFromInteraction(interaction, meta);
                CommandController.getInstance().action(inputContext)
                    .display(DiscordCommandOutputDisplay.getInstance(interaction));
            }
        });
    }
}
