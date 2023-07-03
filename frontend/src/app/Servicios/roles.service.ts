import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RolModel } from '../Models/roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  resource: string = 'http://localhost:3000/api/v1/roles';
  rol: any[] = [];
  selectedRol: any = null;

  constructor(private httpClient: HttpClient) { 
    this.loadUsuario();
  }

  private loadUsuario(){
    this.rol = [];
  }

  getRoles(){
    return this.httpClient.get('http://localhost:3000/api/v1/roles')
  }

  addRol(payload: RolModel): Observable<RolModel>{
    return this.httpClient.post<RolModel>('http://localhost:3000/api/v1/roles',payload);
  }
}
