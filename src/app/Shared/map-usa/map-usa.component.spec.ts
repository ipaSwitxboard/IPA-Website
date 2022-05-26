import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapUsaComponent } from './map-usa.component';

describe('MapUsaComponent', () => {
  let component: MapUsaComponent;
  let fixture: ComponentFixture<MapUsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapUsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
