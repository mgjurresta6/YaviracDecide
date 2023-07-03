import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { JornadaModel } from '../Models/jornadas.model';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  resource: string = 'http://localhost:3000/api/v1/jornadas';
  jornada: any[] = [];
  selectedJornada: any = null;

  constructor(private httpClient: HttpClient) { 
    this.loadJornada();
  }

  private loadJornada(){
    this.jornada = [];
  }

  getJornadas(){
    return this.httpClient.get('http://localhost:3000/api/v1/jornadas')
  }

  addJornadas(payload: JornadaModel): Observable<JornadaModel>{
    return this.httpClient.post<JornadaModel>('http://localhost:3000/api/v1/jornadas',payload);
  }
}
