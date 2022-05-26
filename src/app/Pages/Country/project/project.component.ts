import {Component, DoCheck, OnInit} from '@angular/core';
import {ProjectEntity} from "../../../Entities/project.entity";
import {ActivatedRoute, Router} from "@angular/router";
import {GenericCrudService} from "../../../services/generic-crud.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, DoCheck {
  project : ProjectEntity | undefined;
  id: number = 0;
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private crudService: GenericCrudService<ProjectEntity, number>
  ) {
  }

  ngDoCheck(): void {
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    if(this.project && this.project.id != this.id){
      this.getproject();
    }
    }

  ngOnInit(): void {
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.getproject();
  }

  getproject(){
    this.crudService.findOne(this.id,'project').subscribe({
      next: (e) => this.project = e,
      error: console.error
    });
    console.log(this.project)
  }
}
