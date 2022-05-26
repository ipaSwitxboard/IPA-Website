import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralContactComponent } from './general-contact.component';
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('GeneralContactComponent', () => {
  let component: GeneralContactComponent;
  let fixture: ComponentFixture<GeneralContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralContactComponent ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
