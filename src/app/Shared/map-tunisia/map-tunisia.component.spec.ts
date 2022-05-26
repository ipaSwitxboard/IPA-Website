import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTunisiaComponent } from './map-tunisia.component';

describe('MapTunisiaComponent', () => {
  let component: MapTunisiaComponent;
  let fixture: ComponentFixture<MapTunisiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapTunisiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTunisiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
