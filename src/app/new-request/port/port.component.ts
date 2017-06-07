import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigate(['/new/project']);
  }


  onBack() {
    this.router.navigate(['/new/destination']);
  }

}
