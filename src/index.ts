import {ClientFactory} from "./client/ClientFactory";

function startApplication(): void {
    ClientFactory.getInstance().getDiscordClient().start();
}

startApplication();
