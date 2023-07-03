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
                routerLink: '/dashboard'
            },
            {
                label: 'CRONOGRAMA',
                routerLink: '/cronograma'
            },
            {
                label: 'VOTANTES',
                routerLink: '/estudiante'
            },
            {
                label: 'CANDIDATOS Y LISTA',
                routerLink: '/lista'
        
            },
            {
                label: 'USUARIOS',
                routerLink: '/usuario'
            },
            {
                label: 'VOTACIONES',
                routerLink: '/lista-votante'
            },
            {
                label: ''
            },
             {
                label: ''
            },
            {
                label: ''
            },
            {
                label: ''
            },
            {
                label: ''
            },
            {
                label: ''
            },
            {
                label: ''
            },
            {
                label: ''
            },
            {
                label: ''
            },
            {
                label: ''
            },
            {
                label: ''
            },
            {
                label: ''
            },
            {
                label: ''
            },
            {
                label: 'CONFIGURACION',
                routerLink: '/configuracion'
            },
            
        ];
    }
}
