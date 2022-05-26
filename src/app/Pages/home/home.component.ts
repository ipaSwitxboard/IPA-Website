import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoURL: string = "https://www.youtube.com/watch?v=SVen7IDjQts&ab_channel=IPASwitxboard"
  safeURL: SafeResourceUrl;


  constructor(private _sanitizer: DomSanitizer, private router: Router){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
    this.router = router;
  }

  ngOnInit(): void {
  }

}
