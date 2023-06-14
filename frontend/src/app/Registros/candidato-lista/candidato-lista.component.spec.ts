import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoListaComponent } from './candidato-lista.component';

describe('CandidatoListaComponent', () => {
  let component: CandidatoListaComponent;
  let fixture: ComponentFixture<CandidatoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatoListaComponent]
    });
    fixture = TestBed.createComponent(CandidatoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
