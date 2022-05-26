import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger, useAnimation} from "@angular/animations";
import {Router} from "@angular/router";

interface office {
  title: string;
  address: string;
  mail: string;
  phone: string;
}


@Component({
  selector: 'app-general-contact',
  templateUrl: './general-contact.component.html',
  styleUrls: ['./general-contact.component.scss'],
  animations: [
    trigger('formOut', [state('isNotChosen', style({transform: 'translateY(200%)'})), state('isChosen', style({transform: 'translateY(58vh)'})), transition('isNotChosen =>isChosen', animate('1s ease-in'))] ),
  ],
})
export class GeneralContactComponent implements OnInit {
  isNotChosen: Boolean[] = [true,true];
  visible: boolean = true;
  title: string= "IPA Switxboard Tunis";
  phone: string=" +216 71 337 457";
  address: string="44 Rue ibn Charaf";
  mail: string= "tunisoffice@switxboard.net";
  offices : office[] = [
    {
      title: "HQ Tunisia",
      phone: "+216 70 146 985",
      mail: " tunisoffice@switxboard.net",
      address: "10, Hassen Ben Chabeen La Marsa"
    },{
      title: "Tunis",
      phone: "+216 71 337 457",
      mail: " tunisoffice@switxboard.net",
      address: "44 Rue ibn Charaf"
    },{
      title: "Sousse",
      phone: "+216 73 205 653",
      mail: "sousseoffice@switxboard.net",
      address: "Boulevard 14 janvier khezama"
    },{
      title: "Mahdia",
      address: "Rue 02 Mars-5111",
      mail: "sousseoffice@switxboard.net",
      phone: "+216 73 680 960"
    },{
      title: "Sfax",
      address: "Rue jameleddine afghani 3002",
      mail: "sfaxoffice@switxboard.net",
      phone: "+216 74 287 006"
    },{
      title: "Zarzis",
      address: "Zarzis: Zone touristique Sangho",
      mail: "zarzisoffice@switxboard.net",
      phone: "+216 98 137 045"
    },{
      title: "Tataouine",
      address: "Douiret, Tataouine",
      mail: "Tataouineoffice@switxboard.net",
      phone: ""
    },

  ];

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  toggle(place: number) {
    if(place == 4 || place == 5 ){
      this.isNotChosen[0] = true;
    }
    else{
      this.isNotChosen[0] = false;
    }

    console.log(this.isNotChosen);
  }

  showOffice(title: string, phone: string, address:string, mail: string): void{
    this.title ='IPA Switxboard ' + title;
    this.address = address;
    this.phone= phone;
    this.mail= mail;
    this.isNotChosen[0] = false;
  }

}
