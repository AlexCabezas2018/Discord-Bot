import {Output} from "./Output";
import {OutputDisplay} from "../display/OutputDisplays";

export abstract class EmptyOutput extends Output {
    abstract display(display: OutputDisplay): void;
}
