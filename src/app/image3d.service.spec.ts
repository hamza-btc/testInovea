import { TestBed } from '@angular/core/testing';

import { Image3dService } from './image3d.service';

describe('Image3dService', () => {
  let service: Image3dService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Image3dService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
