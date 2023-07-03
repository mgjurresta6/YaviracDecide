import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar-votante',
  templateUrl: './navbar-votante.component.html',
  styleUrls: ['./navbar-votante.component.css']
})
export class NavbarVotanteComponent {
  items: MenuItem[] = [];

  constructor() {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'LISTAS',
                routerLink: ''
            }           
        ];
    }
}
