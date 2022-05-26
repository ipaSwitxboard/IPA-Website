import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit, DoCheck {

  subject: string | null = '';
  constructor(
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngDoCheck(): void {
    this.subject = this.route.snapshot.paramMap.get('subject');
    console.log(this.subject);
  }

  ngOnInit(): void {
    this.subject = this.route.snapshot.paramMap.get('subject');
    console.log(this.subject);
  }

}
