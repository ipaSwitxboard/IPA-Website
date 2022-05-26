import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserEntity} from "../../Entities/user.entity";
import {GenericCrudService} from "../../services/generic-crud.service";
import {Article} from "../../Entities/article.entity";
import {ToAddArticle} from "../../Entities/toAddArticle";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  constructor(
    private crudService: GenericCrudService<ToAddArticle, number>,
    private formBuilder: FormBuilder,
    private  router: Router
  ) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      paragraph1: ['', Validators.required],
      paragraph2: ['', Validators.required],
      writer: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  get title() {
    return this.form.get("title");
  }
  get description() {
    return this.form.get("description");
  }
  get paragraph1() {
    return this.form.get("paragraph1");
  }
  get paragraph2() {
    return this.form.get("paragraph2");
  }
  get writer() {
    return this.form.get("writer");
  }
  get country() {
    return this.form.get("country");
  }

  async addArticle() {
    const article: ToAddArticle = {
      title: this.title?.value,
      description: this.description?.value,
      paragraph1: this.paragraph1?.value,
      paragraph2: this.paragraph2?.value,
      writer: this.writer?.value,
      country: this.country?.value,
    }
    if(localStorage.getItem('token')){
      await this.crudService.save(article, 'article');
    }
    else {
      console.log('sign in expired');
      await this.router.navigateByUrl('admin')
    }
  }

}
