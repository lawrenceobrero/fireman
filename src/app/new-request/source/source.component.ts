import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  defaultLocation = "AB";

  constructor(private router: Router) { }

  ngOnInit() {


  }


  onSubmit(form: NgForm) {
    console.log(form);

    
    
  }

  onNext() {
    this.router.navigate(['/new/destination']);
  }




}
