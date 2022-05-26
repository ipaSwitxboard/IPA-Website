import { TestBed } from '@angular/core/testing';

import { GenericCrudService } from './generic-crud.service';
import {MapBoxComponent} from "../Layouts/map-box/map-box.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('GenericCrudService', () => {
  let service: GenericCrudService<any, any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapBoxComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
    service = TestBed.inject(GenericCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
