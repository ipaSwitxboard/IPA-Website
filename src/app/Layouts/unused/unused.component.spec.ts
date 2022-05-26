import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnusedComponent } from './unused.component';

describe('UnusedComponent', () => {
  let component: UnusedComponent;
  let fixture: ComponentFixture<UnusedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnusedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
