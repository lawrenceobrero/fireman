import { Subscription } from 'rxjs/Subscription';
import { DestinationService } from './../../data/destination.service';
import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Address } from '../../data/address.model';

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
  sourceAddresses: Address[] = [];
  startedEditingSubscrition: Subscription;
  editModeChangedSubscription: Subscription;
  subscription: Subscription;


  constructor(private router: Router, private sourceService: SourceService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/new']);
  }

  onNext() {
    this.router.navigate(['/new/port']);
  }

}
