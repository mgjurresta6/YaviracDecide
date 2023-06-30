import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string): string | null {
    if (username === 'candidato' && password === 'candidato') {
      return 'candidato';
    } else if (username === 'votante' && password === 'votante') {
      return 'votante';
    } else if (username === 'administrador' && password === 'administrador') {
      return 'administrador';
    } else {
      return null; // Credenciales inválidas
    }
  }
}
