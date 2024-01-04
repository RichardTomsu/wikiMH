import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecosPage } from './decos.page';

describe('DecosPage', () => {
  let component: DecosPage;
  let fixture: ComponentFixture<DecosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DecosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
