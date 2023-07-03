import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarreraModel } from '../Models/carreras.model';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  resource: string = 'http://localhost:3000/api/v1/carreras';
  carrera: any[] = [];
  selectedCarrera: any = null;

  constructor(private httpClient: HttpClient) { 
    this.loadCarrera();
  }

  private loadCarrera(){
    this.carrera = [];
  }

  getCarreras(){
    return this.httpClient.get('http://localhost:3000/api/v1/carreras')
  }

  addCarrera(payload: CarreraModel): Observable<CarreraModel>{
    return this.httpClient.post<CarreraModel>('http://localhost:3000/api/v1/carreras',payload);
  }
}
