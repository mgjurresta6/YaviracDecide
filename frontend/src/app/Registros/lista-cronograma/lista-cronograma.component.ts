import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { CronogramaService } from 'src/app/Servicios/cronograma.service';

@Component({
  selector: 'app-lista-cronograma',
  templateUrl: './lista-cronograma.component.html',
  styleUrls: ['./lista-cronograma.component.css']
})
export class ListaCronogramaComponent {
  cronograma: any[] = [];
  selectedCron: any;

  constructor(private cronogramaService: CronogramaService, private router: Router){
    this.cronograma = this.cronogramaService.cronograma;
  }

  crearCronograma(){
    this.cronogramaService.selectedCron = null;
    this.router.navigate(['cronograma']);
  }

  editCron(id: any) {
    this.cronogramaService.selectedCron = id;
    this.router.navigate(['cronograma']);
  }

  deleteCron(id: number) {
    this.cronogramaService.deleteCron(id);
    console.log(this.cronogramaService.cronograma);
  }
}
