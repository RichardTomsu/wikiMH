import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeaponDetailsPage } from './weapon-details.page';

describe('WeaponDetailsPage', () => {
  let component: WeaponDetailsPage;
  let fixture: ComponentFixture<WeaponDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeaponDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
