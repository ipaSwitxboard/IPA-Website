import { Component, OnInit } from '@angular/core';
import 'flowbite';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss']
})
export class NavBarMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrolling() {
    window.scrollTo(0, window.screen.height+100000);
  }
}
