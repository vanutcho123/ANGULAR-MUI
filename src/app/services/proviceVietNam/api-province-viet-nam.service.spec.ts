import { TestBed } from '@angular/core/testing';

import { ApiProvinceVietNamService } from './api-province-viet-nam.service';

describe('ApiProvinceVietNamService', () => {
  let service: ApiProvinceVietNamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProvinceVietNamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
