import { Component, OnInit } from '@angular/core';
import {Article} from "../../../Entities/article.entity";
import {GenericCrudService} from "../../../services/generic-crud.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles: Article[] | undefined;
  country: string = 'Tunisia' ;

  constructor(
    private router: Router,
    private route : ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.country = <string>this.route.snapshot.paramMap.get('country');
    console.log(this.country);
    if (this.country == null){
      this.country= 'Tunisia'
    }
  }
}
