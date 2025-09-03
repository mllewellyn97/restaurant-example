import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladsAndSoupsMenuComponent } from './salads-and-soups-menu.component';

describe('SaladsAndSoupsMenuComponent', () => {
  let component: SaladsAndSoupsMenuComponent;
  let fixture: ComponentFixture<SaladsAndSoupsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaladsAndSoupsMenuComponent]
    });
    fixture = TestBed.createComponent(SaladsAndSoupsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
