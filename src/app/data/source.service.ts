import { Address } from './address.model';
import { Subject } from 'rxjs/Subject';

export class SourceService{

    private addresses:Address[] = [];
    addressChanged = new Subject<Address[]>();
    startedEditing = new Subject<number>();
    editModeChaged = new Subject<boolean>();
    sourceValid = new Subject<boolean>();

    getAddresses() {
        return this.addresses.slice();
    }

    getAddress(index: number) {
        return this.addresses[index];
    }
    
    addAddress(address: Address) {
        this.addresses.push(address);
        this.addressChanged.next(this.addresses.slice());      
    }

    updateAddress(index: number, newAddress: Address) {
        this.addresses[index] = newAddress;
        this.addressChanged.next(this.addresses.slice());
    }


    deleteAddress(index: number) {
        this.addresses.splice(index, 1);
        this.addressChanged.next(this.addresses.slice());
    }

}