import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-tunisia',
  templateUrl: './map-tunisia.component.html',
  styleUrls: ['./map-tunisia.component.scss']
})
export class MapTunisiaComponent implements OnInit {

  constructor() { }
  @Input() heightOfMap : number | undefined;
  @Input() office : string| undefined;
  ngOnInit(): void {
    // @ts-ignore
    document.getElementById('mom').style.height = this.heightOfMap + 'vh';
    if(this.office){
      // @ts-ignore
      document.getElementById(this.office).style.fill = '#242529';
    }
  }

}
