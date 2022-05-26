import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GenericCrudService} from "../../../services/generic-crud.service";
import {Article} from "../../../Entities/article.entity";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, DoCheck {
  article!: Article;
  id: string | null = '0';


  constructor(
    private crudService: GenericCrudService<Article, number>,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
  }

  ngDoCheck(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    if(this.article!= null && parseInt(<string>this.id) != this.article.id){
      this.getarticle();
    }
  }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    this.getarticle();

  }

  getarticle(){
    if (typeof this.id === "string") {
      this.crudService.findOne(parseInt(this.id), 'article').subscribe({
        next: (e) => this.article = e,
        error: console.error
      });
      console.log(this.article);
    }
  }
}
