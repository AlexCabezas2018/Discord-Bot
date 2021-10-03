import {ApplicationClient} from "./ApplicationClient";
import {DiscordClient} from "./DiscordClient";

export class ClientFactory {
    private static instance: ClientFactory

    getDiscordClient(): ApplicationClient {
        return new DiscordClient();
    }

    static getInstance() : ClientFactory {
        if(!this.instance) {
            this.instance = new ClientFactory();
        }
        return this.instance;
    }
}
