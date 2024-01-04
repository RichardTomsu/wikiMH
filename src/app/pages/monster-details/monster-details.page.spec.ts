import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonsterDetailsPage } from './monster-details.page';

describe('MonsterDetailsPage', () => {
  let component: MonsterDetailsPage;
  let fixture: ComponentFixture<MonsterDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonsterDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
