import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVotanteComponent } from './navbar-votante.component';

describe('NavbarVotanteComponent', () => {
  let component: NavbarVotanteComponent;
  let fixture: ComponentFixture<NavbarVotanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarVotanteComponent]
    });
    fixture = TestBed.createComponent(NavbarVotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
