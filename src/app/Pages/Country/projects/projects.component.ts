import {Component, DoCheck, OnInit} from '@angular/core';
import { default as projectsData} from '../../../Generics/projects'
import {ActivatedRoute, Router} from "@angular/router";
import {GenericCrudService} from "../../../services/generic-crud.service";
import {FamilyEntity} from "../../../Entities/family.entity";
import {ProjectEntity} from "../../../Entities/project.entity";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, DoCheck {
  projects: ProjectEntity[] | undefined;
  country: string | undefined;
  numb: number = 0;
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private crudService: GenericCrudService<ProjectEntity, number>
  ) {
  }

  ngOnInit(): void {
    this.getprojects();
  }

  ngDoCheck(): void {
    let country = <string>this.route.snapshot.paramMap.get('country');
    if(country != this.country){
      this.country = country;
      this.getprojects();
      // @ts-ignore
      console.log(this.projects);
      console.log(country)
    }
  }

  getprojects(){
    if (this.country != null) {
      this.crudService.findByCountry(this.country, 'project/bycountry').subscribe({
        next: (e) => this.projects = e,
        error: console.error
      });
    }
    console.log(this.projects)
  }
}
