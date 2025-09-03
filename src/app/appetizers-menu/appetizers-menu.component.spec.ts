import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppetizersMenuComponent } from './appetizers-menu.component';

describe('AppetizersMenuComponent', () => {
  let component: AppetizersMenuComponent;
  let fixture: ComponentFixture<AppetizersMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppetizersMenuComponent]
    });
    fixture = TestBed.createComponent(AppetizersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
