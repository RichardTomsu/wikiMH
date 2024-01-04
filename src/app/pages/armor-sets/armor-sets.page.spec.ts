import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmorSetsPage } from './armor-sets.page';

describe('ArmorSetsPage', () => {
  let component: ArmorSetsPage;
  let fixture: ComponentFixture<ArmorSetsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArmorSetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
