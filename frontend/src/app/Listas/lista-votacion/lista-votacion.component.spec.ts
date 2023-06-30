import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVotacionComponent } from './lista-votacion.component';

describe('ListaVotacionComponent', () => {
  let component: ListaVotacionComponent;
  let fixture: ComponentFixture<ListaVotacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVotacionComponent]
    });
    fixture = TestBed.createComponent(ListaVotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
