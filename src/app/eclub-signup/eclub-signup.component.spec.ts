import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclubSignupComponent } from './eclub-signup.component';

describe('EclubSignupComponent', () => {
  let component: EclubSignupComponent;
  let fixture: ComponentFixture<EclubSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EclubSignupComponent]
    });
    fixture = TestBed.createComponent(EclubSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
