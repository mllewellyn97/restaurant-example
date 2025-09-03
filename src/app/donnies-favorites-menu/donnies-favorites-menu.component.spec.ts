import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonniesFavoritesMenuComponent } from './donnies-favorites-menu.component';

describe('DonniesFavoritesMenuComponent', () => {
  let component: DonniesFavoritesMenuComponent;
  let fixture: ComponentFixture<DonniesFavoritesMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonniesFavoritesMenuComponent]
    });
    fixture = TestBed.createComponent(DonniesFavoritesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
