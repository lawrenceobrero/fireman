import { Address } from './../../../../data/address.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-source-item',
  templateUrl: './source-item.component.html',
  styleUrls: ['./source-item.component.css']
})
export class SourceItemComponent implements OnInit {
  @Input() address: Address;
  @Input() index: number;


  constructor() { }

  ngOnInit() {
  }

}
