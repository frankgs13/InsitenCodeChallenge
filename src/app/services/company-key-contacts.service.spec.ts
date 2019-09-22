import { TestBed } from '@angular/core/testing';

import { CompanyKeyContactsService } from './company-key-contacts.service';

describe('CompanyKeyContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyKeyContactsService = TestBed.get(CompanyKeyContactsService);
    expect(service).toBeTruthy();
  });
});
