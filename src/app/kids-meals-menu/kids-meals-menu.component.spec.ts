import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsMealsMenuComponent } from './kids-meals-menu.component';

describe('KidsMealsMenuComponent', () => {
  let component: KidsMealsMenuComponent;
  let fixture: ComponentFixture<KidsMealsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsMealsMenuComponent]
    });
    fixture = TestBed.createComponent(KidsMealsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
