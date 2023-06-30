import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    // Aquí puedes realizar la lógica de autenticación, por ejemplo, enviar una solicitud HTTP a un servidor
    const role = this.authService.login(this.username, this.password);
    if (role) {
      this.router.navigate(['home', role]);
    } else {
      alert('Credenciales inválidas');
    }
  }
}
