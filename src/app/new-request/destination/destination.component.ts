import { Subscription } from 'rxjs/Subscription';
import { DestinationService } from './../../data/destination.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Address } from '../../data/address.model';
import { ToastrService } from '../../data/toastr.service';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  defaultLocation = "AB";
  editedItemIndex: number;
  editedItem: Address;
  editMode = false;
  next = false;
  desAddresses: Address[] = [];
  startedEditingSubscrition: Subscription;
  editModeChangedSubscription: Subscription;
  subscription: Subscription;


  constructor(private router: Router, private destinationService:
    DestinationService, private toastr: ToastrService) { }

  ngOnInit() {

    console.log('In ngOnInit of destination component ...');

    this.subscription = this.destinationService.addressChanged
      .subscribe(
      (addresses: Address[]) => {
        this.desAddresses = addresses;
      }
    );

    this.startedEditingSubscrition = this.destinationService.startedEditing
      .subscribe(
      (index: number) => {
        
        this.editedItemIndex = index;
        this.destinationService.editModeChaged.next(true);

        if (this.editedItemIndex >= 0) {
          this.editedItem = this.destinationService.getAddress(index);
          this.form.setValue({
            hostname: this.editedItem.hostname,
            ipsubnet: this.editedItem.ip,
            location: this.editedItem.location
          });
        }

        console.log('edit mode' + this.editMode);
      }
    );

    console.log('Out ngOnInit of destination component ...');
  }



  onSubmit(form: NgForm) {
    const value = form.value;
    const newAddress = new Address(value.hostname, value.ipsubnet, value.location);
    if (this.editMode) {
      this.destinationService.updateAddress(this.editedItemIndex, newAddress);
      this.destinationService.startedEditing.next(-1);
      this.toastr.success('Source address updated.');
    } else {
      this.destinationService.addAddress(newAddress);
      this.toastr.success('New source address added.');
    }
    this.editMode = false;
    if (this.desAddresses.length) this.next = true;

    console.log('next :' + this.next);

    form.reset();
  }

  onBack() {
    this.router.navigate(['/new']);
  }

  onNext() {
    this.router.navigate(['/new/port']);
  }

}
