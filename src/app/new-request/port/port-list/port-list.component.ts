import { PortService } from './../port.service';
import { Component, OnInit } from '@angular/core';
import { Port } from '../../../data/port.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-port-list',
  templateUrl: './port-list.component.html',
  styleUrls: ['./port-list.component.css']
})
export class PortListComponent implements OnInit {


  ports : Port[];
  subscription: Subscription;
  startedEditingSubscription : Subscription;
  selectedRow : number;

  constructor(private portService : PortService) { }

  ngOnInit() {
    this.subscription = this.portService.portChanged
      .subscribe(
        (ports: Port[]) => {
          this.ports = ports;
        }
      );

      this.startedEditingSubscription = this.portService.startedEditing
      .subscribe(
        (index : number) => {
          this.selectedRow = index;
        }
      );

    this.ports = this.portService.getPorts();
    
  }


  onEditItem(index : number) {
    console.log('index = ' +  index);
    
    this.selectedRow = index;
    this.portService.startedEditing.next(index);
    
  }

}
