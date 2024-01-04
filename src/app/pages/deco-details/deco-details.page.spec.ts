import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecoDetailsPage } from './deco-details.page';

describe('DecoDetailsPage', () => {
  let component: DecoDetailsPage;
  let fixture: ComponentFixture<DecoDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DecoDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
