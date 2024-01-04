import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmorDetailsPage } from './armor-details.page';

describe('ArmorDetailsPage', () => {
  let component: ArmorDetailsPage;
  let fixture: ComponentFixture<ArmorDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArmorDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
