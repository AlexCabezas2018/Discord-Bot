import {Input} from "../model/input/Input";
import {Output} from "../model/output/Output";

export interface Controller {
    action(input: Input): Output;
}
