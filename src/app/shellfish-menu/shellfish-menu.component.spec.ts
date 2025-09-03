import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellfishMenuComponent } from './shellfish-menu.component';

describe('ShellfishMenuComponent', () => {
  let component: ShellfishMenuComponent;
  let fixture: ComponentFixture<ShellfishMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellfishMenuComponent]
    });
    fixture = TestBed.createComponent(ShellfishMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
