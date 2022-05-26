import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMobileComponent } from './nav-bar-mobile.component';
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('NavBarMobileComponent', () => {
  let component: NavBarMobileComponent;
  let fixture: ComponentFixture<NavBarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarMobileComponent ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
