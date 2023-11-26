import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadTableComponent } from './lead-table.component';

describe('LeadTableComponent', () => {
  let component: LeadTableComponent;
  let fixture: ComponentFixture<LeadTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadTableComponent]
    });
    fixture = TestBed.createComponent(LeadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
