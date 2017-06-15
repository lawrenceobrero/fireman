import { Component, OnInit } from '@angular/core';
import { Address } from './../../../data/address.model';
import { Subscription } from 'rxjs/Subscription';
import { DestinationService } from './../../../data/destination.service';


@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  destinationAddresses : Address[];
  subscription: Subscription;
  startedEditingSubscription : Subscription;
  selectedRow : number;

  constructor(private destinationService : DestinationService) { }

  ngOnInit() {

    this.subscription = this.destinationService.addressChanged
      .subscribe(
        (addresses: Address[]) => {
          this.destinationAddresses = addresses;
        }
      );

      this.startedEditingSubscription = this.destinationService.startedEditing
      .subscribe(
        (index : number) => {
          this.selectedRow = index;
        }
      );

    this.destinationAddresses = this.destinationService.getAddresses();
    
  }

  
  onEditItem(index : number) {
    console.log('index = ' +  index);
    
    this.selectedRow = index;
    this.destinationService.startedEditing.next(index);
    
  }


  ngOnDestroy() {
    console.log('In ngOnDestroy of DestinationListComponent');
    this.startedEditingSubscription.unsubscribe();
    this.subscription.unsubscribe();
    console.log('Out ngOnDestroy of DestinationListComponent');
  }

}
