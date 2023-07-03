import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ParaleloModel } from '../Models/paralelos.model';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  resource: string = 'http://localhost:3000/api/v1/paralelos';
  paralelo: any[] = [];
  selectedParalelo: any = null;

  constructor(private httpClient: HttpClient) { 
    this.loadParalelo();
  }

  private loadParalelo(){
    this.paralelo = [];
  }

  getParalelos(){
    return this.httpClient.get('http://localhost:3000/api/v1/paralelos')
  }

  addJornadas(payload: ParaleloModel): Observable<ParaleloModel>{
    return this.httpClient.post<ParaleloModel>('http://localhost:3000/api/v1/paralelos',payload);
  }
}
