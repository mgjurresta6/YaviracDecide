import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { EstudianteModel } from '../Models/estudiantes.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  ur: string = 'http://localhost:3000/api/v1/estudiantes';
  estudiante: any[] = [];
  selectedEstudiante: any = null;

  constructor(private httpClient: HttpClient) { 
    this.loadEstudiante();
  }

  private loadEstudiante(){
    this.estudiante = [];
  }
  addEstudiante(payload){
    this.estudiante.push(payload);
  }
  updateEstudiante(cedula: number, payload: EstudianteModel): Observable<EstudianteModel> {
    const url = '${this.ur}/${cedula}';
    return this.httpClient.put<EstudianteModel>(url,payload);
  }

  deleteEstudiante(cedula: number): Observable<EstudianteModel> {
    const url = '${this.ur}/${cedula}';
    return this.httpClient.delete<EstudianteModel>(url);
  }
  /*getEstudiantes(): Observable<EstudianteModel[]>{
    return this.httpClient.get<EstudianteModel[]>('http://localhost:3000/api/v1/estudiantes');
  }*/
}
