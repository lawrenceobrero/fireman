import { Address } from './../../../data/address.model';
import { SourceService } from './../../../data/source.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({

  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css']
})
export class SourceListComponent implements OnInit {

  sourceAddresses : Address[];
  subscription: Subscription;
  startedEditingSubscription : Subscription;
  selectedRow : number;
  
  constructor(private sourceService: SourceService) { }

  ngOnInit() {
    this.subscription = this.sourceService.addressChanged
      .subscribe(
        (addresses: Address[]) => {
          this.sourceAddresses = addresses;
        }
      );

      this.startedEditingSubscription = this.sourceService.startedEditing
      .subscribe(
        (index : number) => {
          this.selectedRow = index;
        }
      );

    this.sourceAddresses = this.sourceService.getAddresses();
    
  }


  onEditItem(index : number) {
    console.log('index = ' +  index);
    
    this.selectedRow = index;
    this.sourceService.startedEditing.next(index);
    
  }

}
