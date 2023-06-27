import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar-lista',
  templateUrl: './navbar-lista.component.html',
  styleUrls: ['./navbar-lista.component.css']
})
export class NavbarListaComponent {

  items: MenuItem[] = [];

  constructor() {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'CANDIDATOS Y LISTA',
                routerLink: '/listas'
            }
        ];
    }
}
