import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Port } from '../../data/port.model';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit, OnDestroy {

  @ViewChild('form') form: NgForm;

  defaultProtocol = 'TCP';
  editedItemIndex: number;
  editedItem: Port;
  editMode = false;
  editModeChangedSubscription: Subscription;
  next = false;
  ports: Port[] = [];
  startedEditingSubscrition: Subscription;
  subscription: Subscription;

  constructor(private router:Router) { }

  ngOnInit() {

  }

  onNext() {
    this.router.navigate(['/new/project']);
  }


  onBack() {
    this.router.navigate(['/new/destination']);
  }

  ngOnDestroy() {

  }

}
