import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  onNext() {
    this.router.navigate(['/new/destination']);
  }

}
