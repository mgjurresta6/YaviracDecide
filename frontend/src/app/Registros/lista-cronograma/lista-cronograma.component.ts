import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { CronogramaService } from 'src/app/Servicios/cronograma.service';
import { differenceInMinutes, formatDistanceToNow } from 'date-fns';

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
  calcularTiempoRestante(fecha: Date): string {
    const ahora = new Date(); // Hora actual
    const diferenciaMinutos = differenceInMinutes(fecha, ahora); // Diferencia en minutos

    return formatDistanceToNow(fecha, { addSuffix: true }); // Retornar el tiempo restante formateado
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
