import { Component, OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'DASHBOARD',
            },
            {
                label: 'CRONOGRAMA',
            },
            {
                label: 'VOTANTES',
                routerLink: '/estudiante'
            },
            {
                label: 'CANDIDATOS Y LISTA',
            },
            {
                label: 'USUSARIOS',
            }
        ];
    }
}
