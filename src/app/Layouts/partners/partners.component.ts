import { Component, OnInit } from '@angular/core';
import {default as partnersData} from '../../Generics/partners';

interface Partner {
  name: String;
  link: String;
  pic: String;
}

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners: Partner[] = partnersData;
  constructor() { }

  ngOnInit(): void {
    console.log(this.partners);
  }
}
