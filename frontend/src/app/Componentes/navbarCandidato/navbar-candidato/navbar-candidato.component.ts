import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar-candidato',
  templateUrl: './navbar-candidato.component.html',
  styleUrls: ['./navbar-candidato.component.css']
})
export class NavbarCandidatoComponent {
  items: MenuItem[] = [];

  constructor() {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'CANDIDATOS Y LISTA',
                routerLink: '/candidato'
            }
        ];
    }
}
