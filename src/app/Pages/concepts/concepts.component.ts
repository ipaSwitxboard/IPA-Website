import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {

  concepts: any[] = [{name: "Beach and Academy hub", desc: "Repurposing of existing Hotel infrastructure in Tunisia into Hybrid Hospitality hubs encompassing Education/Academy/Co-working/Makerspace/Labs/Tourism/Events and entertainment"},
    {name: "Upskilling Project for Engineers – Tunisia", desc: "Enhancing employability for Engineers through training and matching with\n" +
        "employment opportunities"},{
    name: "Vertical Farming hub – Tunisia",
      desc: "Creating a Competence Center for Vertical Farming/Hydroponics in Tunisia"
    },
    {
      name: "Sustainability Academy Cyprus",
      desc: "Creation of a private Academy in the Troodos Mountain of Cyprus teaching all skills\n" +
        "related to circular economy, renewables, sustainable food production, sustainable\n" +
        "tourism"
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
