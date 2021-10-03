import {Input} from "../model/Input";
import {Output} from "../../output/model/Output";

export interface Controller {
    action(input: Input): Output;
}
