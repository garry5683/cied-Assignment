import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilityComponent } from './probability.component';

describe('ProbabilityComponent', () => {
  let component: ProbabilityComponent;
  let fixture: ComponentFixture<ProbabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbabilityComponent]
    });
    fixture = TestBed.createComponent(ProbabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
