import { Port } from './../../data/port.model';
import { Subject } from 'rxjs/Subject';


export class PortService {

    private ports: Port[] = [];
    portChanged = new Subject<Port[]>();
    startedEditing = new Subject<number>();
    editModeChaged = new Subject<boolean>();
    sourceValid = new Subject<boolean>();


    getPorts() {
        return this.ports.slice();
    }
    
    getPort(index: number) {
        return this.ports[index];
    }

     addPort(port: Port) {
        this.ports.push(port);
        this.portChanged.next(this.ports.slice());      
    }

    updatePort(index: number, newPort: Port) {
        this.ports[index] = newPort;
        this.portChanged.next(this.ports.slice());
    }


    deletePort(index: number) {
        this.ports.splice(index, 1);
        this.portChanged.next(this.ports.slice());
    }

    
}