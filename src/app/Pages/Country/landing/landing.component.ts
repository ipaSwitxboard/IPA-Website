import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {default as memberData} from '../../../Generics/family';
import {GenericCrudService} from "../../../services/generic-crud.service";
import {FamilyEntity} from "../../../Entities/family.entity";


interface Member {
  name: String;
  link: String;
  pic: String;
}


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, DoCheck {

  memberData: FamilyEntity | undefined;
  country:string | null = '';
  member: string | null = '';
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private crudService: GenericCrudService<FamilyEntity, number>
  ) { }

  ngDoCheck(): void {
    this.member = this.route.snapshot.paramMap.get('member');
    if(this.member != this.memberData?.name){
      this.getmembers();
    }
    }

  ngOnInit(): void {
  }

  getmembers(){
    if (this.member != null) {
      this.crudService.findOneByName(this.member, 'family/member').subscribe(
        {
          next : (e)=>
          {
            this.memberData = e;
          },
          error: console.error

        }
      )
    }
  }
}
