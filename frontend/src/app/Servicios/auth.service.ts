import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private smsApiUrl = 'https://api.example.com/sms'; // URL del servicio de SMS

  constructor(private http: HttpClient) { }

  sendVerificationCode(phoneNumber: string, code: string): Observable<any> {
    const message = `Your verification code is: ${code}`;
    const payload = {
      phoneNumber: phoneNumber,
      message: message
    };
    return this.http.post(this.smsApiUrl, payload);
  }
}
