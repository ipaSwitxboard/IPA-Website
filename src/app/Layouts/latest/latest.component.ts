import {Component, Input, OnInit} from '@angular/core';
import {GenericCrudService} from "../../services/generic-crud.service";
import {Article} from "../../Entities/article.entity";

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {
  articles: Article[] | undefined;
  @Input() country!: string;

  constructor(private crudService: GenericCrudService<Article, number>,) {
  }

  ngOnInit(): void {
    if (this.country != null) {
      this.crudService.findAll('article').subscribe({
        next: (e) => {
          this.articles = e;
          console.log(e);
        },
        error: console.error
      });
    }
  }

}
