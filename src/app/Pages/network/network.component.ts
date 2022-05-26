import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GenericCrudService} from "../../services/generic-crud.service";
import {OrganizationEntity} from "../../Entities/organization.entity";

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
  country: string = 'Germany';

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private crudService: GenericCrudService<OrganizationEntity, number>
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.country = <string>this.route.snapshot.paramMap.get('country');
    console.log(this.country);
    if (this.country == null){
      this.country= 'Germany'
    }
  }


}
