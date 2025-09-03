import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesMenuComponent } from './sides-menu.component';

describe('SidesMenuComponent', () => {
  let component: SidesMenuComponent;
  let fixture: ComponentFixture<SidesMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidesMenuComponent]
    });
    fixture = TestBed.createComponent(SidesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
