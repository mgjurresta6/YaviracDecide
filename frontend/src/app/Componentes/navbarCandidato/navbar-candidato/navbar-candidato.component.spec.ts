import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCandidatoComponent } from './navbar-candidato.component';

describe('NavbarCandidatoComponent', () => {
  let component: NavbarCandidatoComponent;
  let fixture: ComponentFixture<NavbarCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarCandidatoComponent]
    });
    fixture = TestBed.createComponent(NavbarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
