import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {
  cronograma: any[] = [];
  selectedCron: any = null;

  constructor(private httpCliente: HttpClient) { }

  addCron(payload: any){
    return this.httpCliente.post('http://localhost:3000/api/v1/cronogramas',payload)
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
