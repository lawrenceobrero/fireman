import { PortService } from './port.service';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Port } from '../../data/port.model';
import { ToastrService } from '../../data/toastr.service';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css'],
  providers: [PortService]
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

  constructor(private router:Router, private portService: PortService, private toastr: ToastrService) { }

  ngOnInit() {
    console.log('In ngOnInit of PortComponent...');

    this.subscription = this.portService.portChanged
      .subscribe(
        (ports: Port[]) => {
        this.ports = ports;
      });

    this.startedEditingSubscrition = this.portService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.portService.editModeChaged.next(true);
  
          if (this.editedItemIndex >= 0) {
            this.editedItem = this.portService.getPort(index);
            this.form.setValue({
              port: this.editedItem.port,
              protocol: this.editedItem.protocol
            });
          }
        }
      );


    this.editModeChangedSubscription = this.portService.editModeChaged
      .subscribe(
      (editMode: boolean) => {
        this.editMode = editMode;
      });

    this.ports = this.portService.getPorts();

    if (this.ports.length > 0) this.next = true;

    console.log(this.ports);
  }




  onSubmit(form: NgForm) {
    console.log(form);
    
    const value = form.value;
    const newPort = new Port(value.port, value.protocol);

    if (this.editMode) {
      this.portService.updatePort(this.editedItemIndex, newPort);
      this.portService.startedEditing.next(-1);
      this.toastr.success('Port has been updated.');

    } else {
      this.portService.addPort(newPort);
      this.toastr.success('New port has been added.');
    }

    this.editMode = false;
    if (this.ports.length > 0) this.next = true;
    form.reset();
  }


  onNext() {
    this.router.navigate(['/new/project']);
  }


  
  onClear() {
    this.form.reset();
    this.portService.startedEditing.next(-1);
    this.editMode = false;
   
  }


  onDelete(){
    this.portService.deletePort(this.editedItemIndex);
    this.onClear();
    if (this.ports.length == 0) this.next = false;  
    this.toastr.success('Port details deleted.');
  }


  onBack() {
    this.router.navigate(['/new/destination']);
  }

  ngOnDestroy() {

  }

}
