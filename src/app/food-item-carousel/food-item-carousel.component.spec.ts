import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemCarouselComponent } from './food-item-carousel.component';

describe('FoodItemCarouselComponent', () => {
  let component: FoodItemCarouselComponent;
  let fixture: ComponentFixture<FoodItemCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodItemCarouselComponent]
    });
    fixture = TestBed.createComponent(FoodItemCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
