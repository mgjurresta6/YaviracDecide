import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCronogramaComponent } from './lista-cronograma.component';

describe('ListaCronogramaComponent', () => {
  let component: ListaCronogramaComponent;
  let fixture: ComponentFixture<ListaCronogramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCronogramaComponent]
    });
    fixture = TestBed.createComponent(ListaCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
