import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyKeyContactsComponent } from './company-key-contacts.component';

describe('CompanyKeyContactsComponent', () => {
  let component: CompanyKeyContactsComponent;
  let fixture: ComponentFixture<CompanyKeyContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyKeyContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyKeyContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
