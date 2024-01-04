import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharmsPage } from './charms.page';

describe('CharmsPage', () => {
  let component: CharmsPage;
  let fixture: ComponentFixture<CharmsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
