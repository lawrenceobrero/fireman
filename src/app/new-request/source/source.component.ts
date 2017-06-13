import { Address } from './../../data/address.model';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SourceService } from '../../data/source.service';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from '../../data/toastr.service';


@Component({

  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit, OnDestroy {

  @ViewChild('form') form: NgForm;

  defaultLocation = "AB";
  editedItemIndex: number;
  editedItem: Address;
  editMode = false;
  next = false;
  sourceAddresses: Address[] = [];
  startedEditingSubscrition: Subscription;
  editModeChangedSubscription: Subscription;
  subscription: Subscription;



  constructor(private router: Router, private sourceService: SourceService, private toastr: ToastrService) { }


  ngOnInit() {
    console.log(this.form);



    this.subscription = this.sourceService.addressChanged
      .subscribe(
      (addresses: Address[]) => {
        this.sourceAddresses = addresses;
      }
      );


    this.startedEditingSubscrition = this.sourceService.startedEditing
      .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.sourceService.editModeChaged.next(true);

        if (this.editedItemIndex >= 0) {
          this.editedItem = this.sourceService.getAddress(index);
          this.form.setValue({
            hostname: this.editedItem.hostname,
            ipsubnet: this.editedItem.ip,
            location: this.editedItem.location
          });
        }

        console.log('edit mode' + this.editMode);
      }
      );


    this.editModeChangedSubscription = this.sourceService.editModeChaged
      .subscribe(
      (editMode: boolean) => {
        this.editMode = editMode;
        console.log('edit mode' + this.editMode);

      }
      );

    this.sourceAddresses = this.sourceService.getAddresses();
    if (this.sourceAddresses.length > 0) this.next = true;

    console.log(this.sourceAddresses);
  }




  onSubmit(form: NgForm) {
    const value = form.value;
    const newAddress = new Address(value.hostname, value.ipsubnet, value.location);
    if (this.editMode) {
      this.sourceService.updateAddress(this.editedItemIndex, newAddress);
      this.sourceService.startedEditing.next(-1);
      this.toastr.success('Source address updated.');
    } else {
      this.sourceService.addAddress(newAddress);
       this.toastr.success('New source address added.');
    }
    this.editMode = false;
    if (this.sourceAddresses.length > 0) this.next = true;
    form.reset();
  }


  onClear() {
    this.form.reset();
    this.sourceService.startedEditing.next(-1);
    this.editMode = false;
   
  }


  onNext() {
    this.sourceService.sourceValid.next(true);
    this.router.navigate(['/new/destination']);
  }


  onDelete(){
    this.sourceService.deleteAddress(this.editedItemIndex);
    this.onClear();
    if (this.sourceAddresses.length == 0) this.next = false;  
    this.toastr.success('Source address deleted.');
  }

  ngOnDestroy() {
    this.startedEditingSubscrition.unsubscribe();
    this.subscription.unsubscribe();
  }


}
