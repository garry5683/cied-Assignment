import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveLeadCaardsComponent } from './active-lead-caards.component';

describe('ActiveLeadCaardsComponent', () => {
  let component: ActiveLeadCaardsComponent;
  let fixture: ComponentFixture<ActiveLeadCaardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveLeadCaardsComponent]
    });
    fixture = TestBed.createComponent(ActiveLeadCaardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
