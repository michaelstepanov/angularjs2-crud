import { TestBed, inject } from '@angular/core/testing';

import { PlaceHolderService } from './place-holder.service';

describe('PlaceHolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceHolderService]
    });
  });

  it('should be created', inject([PlaceHolderService], (service: PlaceHolderService) => {
    expect(service).toBeTruthy();
  }));
});
