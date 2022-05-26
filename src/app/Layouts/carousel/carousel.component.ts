import {Component, Input, OnInit} from '@angular/core';
import {ProjectEntity} from "../../Entities/project.entity";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() slides: ProjectEntity[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    // @ts-ignore
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    // @ts-ignore
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
