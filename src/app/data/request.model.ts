import { Address } from './address.model';
import { Project } from './project.model';
import { Port } from './port.model';
export class Request {

    constructor(
        sourceList: Address[],
        destinationList: Address[],
        portList: Port[],
        project:Project
    ){}
}