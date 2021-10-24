import {Command} from "./Command";
import {PlayMusicCommand} from "./default/PlayMusicCommand";
import {PauseCommand} from "./default/PauseCommand";
import {ResumeCommand} from "./default/ResumeCommand";
import {PlayMusicDiscordCommand} from "./discord/PlayMusicDiscordCommand";
import {Clients} from "../../../../client/util/Clients";
import {PauseDiscordCommand} from "./discord/PauseDiscordCommand";
import {ResumeDiscordCommand} from "./discord/ResumeDiscordCommand";

export class CommandFactory {

    private static instance: CommandFactory;

    private readonly defaultCommands: Command[];
    private readonly discordCommands: Command[];

    constructor() {
        this.defaultCommands = [
            new PlayMusicCommand(),
            new PauseCommand(),
            new ResumeCommand()
        ];

        this.discordCommands = [
            new PlayMusicDiscordCommand(),
            new PauseDiscordCommand(),
            new ResumeDiscordCommand()
        ]
    }

    static getInstance(): CommandFactory {
        if(!this.instance) {
            this.instance = new CommandFactory();
        }
        return this.instance;
    }

    getCommands(client: Clients): Command[] {
        switch (client) {
            case Clients.DISCORD:
                return this.discordCommands;
            default:
                return this.defaultCommands;
        }
    }
}
