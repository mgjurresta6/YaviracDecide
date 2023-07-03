import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotosService {
  votos: any[] = [];
  selectedVoto: any = null;
  constructor() { 
    
  }
  addVoto(payload: any) {
    this.votos.push(payload);
  }
}
