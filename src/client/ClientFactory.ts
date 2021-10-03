import {Client} from "./Client";
import {DiscordClient} from "./DiscordClient";

export class ClientFactory {
    private static instance: ClientFactory

    getDiscordClient(): Client {
        return new DiscordClient();
    }

    static getInstance() : ClientFactory {
        if(!this.instance) {
            this.instance = new ClientFactory();
        }
        return this.instance;
    }
}
