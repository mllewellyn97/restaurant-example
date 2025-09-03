import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshFishMenuComponent } from './fresh-fish-menu.component';

describe('FreshFishMenuComponent', () => {
  let component: FreshFishMenuComponent;
  let fixture: ComponentFixture<FreshFishMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshFishMenuComponent]
    });
    fixture = TestBed.createComponent(FreshFishMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
