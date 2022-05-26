import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ipa_switxboard';
  noNavbar = [
    '/admin',
    '/add_article',
  ];
  constructor(public router: Router) {
  }

  has_navbar(): boolean{
    return this.has_layout(this.noNavbar);
  }

  has_layout(routes: string[]): boolean{
    const current = this.router.url;
    for (const route of routes){
      if (route === current) {
        return false;
      }
    }
    return true;
  }
}
