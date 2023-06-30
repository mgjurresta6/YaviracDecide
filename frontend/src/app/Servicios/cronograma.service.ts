import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {
  cronograma: any[] = [];
  selectedCron: any = null;

  constructor() { }

  addCron(payload: any){
    this.cronograma.push(payload);
  }
  updateCron(id: number, payload: any) {
    const index = this.cronograma.findIndex(usuario => usuario.id === id);
    this.cronograma[index] = payload;
  }

  deleteCron(id: number) {
    const index = this.cronograma.findIndex(usuario => usuario.id === id);
    if (index > -1) {
      this.cronograma.splice(index, 1);
    }
  }
}
