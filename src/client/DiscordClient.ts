import {ApplicationClient} from "./ApplicationClient";
import {Guild, Interaction} from "discord.js";
import {InputMapper} from "../service/io/input/util/InputMapper";
import {CommandController} from "../service/io/input/controller/CommandController";
import {DiscordCommandOutputDisplay} from "../service/io/output/display/discord/DiscordCommandOutputDisplay";
import {MetaFields} from "../service/io/input/util/MetaFields";
import {Clients} from "./util/Clients";

const {Client, Intents} = require('discord.js');

require("dotenv").config();

export class DiscordClient implements ApplicationClient {

    start(): void {
        global.AbortController = require("node-abort-controller").AbortController; // Music bot crash fix

        const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES]});
        client.login(process.env.DISCORD_TOKEN);

        client.once("ready", () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });

        client.on('interactionCreate', (interaction: Interaction) => {
            if (interaction.isCommand()) {
                const channelId = client.guilds.cache
                    .get(interaction.guildId)
                    .members.cache
                    .get(interaction.member?.user.id).voice.channel?.id

                const meta = new Map<string, any>();
                meta.set(MetaFields.CURRENT_VOICE_CHANNEL, channelId);
                meta.set(MetaFields.CLIENT_ID, Clients.DISCORD);
                meta.set(MetaFields.SERVER_ID, interaction.guildId);

                const inputContext = InputMapper.commandInputFromInteraction(interaction, meta);
                CommandController.getInstance().action(inputContext)
                    .display(DiscordCommandOutputDisplay.getInstance(interaction));
            }
        });

        client.on("guildCreate", (guild: Guild) => {
            guild.commands.create({
                name: 'play', description: 'plays a song', options: [{
                    type: 3, name: "url", description: "the url of the song", required: true
                }]
            });
            guild.commands.create({ name: 'pause', description: 'pauses the player' });
            guild.commands.create({ name: 'resume', description: 'resumes the music' });
        });
    }


}
