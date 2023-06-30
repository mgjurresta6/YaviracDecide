import { Component, OnInit } from '@angular/core';
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
import {Router} from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  formGroup!: FormGroup;

  categories: any[] = [
      { name: 'Si', key: 'S' },
      { name: 'No', key: 'N' },
  ];

  ngOnInit() {
      this.formGroup = new FormGroup({
          selectedCategory: new FormControl()
      });
  }
  usuario: any[] = [];
  selectedCandidato: any;

  constructor(){
  }
}
