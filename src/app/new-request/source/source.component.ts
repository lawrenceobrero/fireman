import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from '../../data/address.model';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  defaultLocation = "AB";

  sourceAddress : Address[] = [];


  next = false;
  constructor(private router: Router) { }

  ngOnInit() {


  }


  onAdd(form: NgForm) {
    console.log(form);
    this.sourceAddress.push(new Address(form.value.hostname,form.value.ipsubnet,form.value.location));
    console.log(this.sourceAddress);
        console.log(this.sourceAddress.length);
      if (this.sourceAddress.length > 0) this.next = true;
  }

  onNext() {

    
    this.router.navigate(['/new/destination']);
  }




}
