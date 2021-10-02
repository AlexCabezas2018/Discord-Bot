import {InputContext} from "../model/InputContext";
import {Response} from "../response/Response";

export interface Controller {
    action(input: InputContext): Response;
}
