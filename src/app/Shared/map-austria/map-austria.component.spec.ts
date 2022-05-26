import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAustriaComponent } from './map-austria.component';

describe('MapAustriaComponent', () => {
  let component: MapAustriaComponent;
  let fixture: ComponentFixture<MapAustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapAustriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
