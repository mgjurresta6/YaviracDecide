import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaprobacionComponent } from './desaprobacion.component';

describe('DesaprobacionComponent', () => {
  let component: DesaprobacionComponent;
  let fixture: ComponentFixture<DesaprobacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesaprobacionComponent]
    });
    fixture = TestBed.createComponent(DesaprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
