import { Component, OnInit } from '@angular/core';
import { SourceService } from '../data/source.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  
  sourceValid : false;
  sourceValidSubscription : Subscription;
  constructor() { }

  ngOnInit() {
  }


  

}
