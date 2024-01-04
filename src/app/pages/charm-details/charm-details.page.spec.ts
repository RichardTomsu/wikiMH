import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharmDetailsPage } from './charm-details.page';

describe('CharmDetailsPage', () => {
  let component: CharmDetailsPage;
  let fixture: ComponentFixture<CharmDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharmDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
