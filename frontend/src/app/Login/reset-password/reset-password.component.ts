import { Component } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  phoneNumber: string;

  constructor(private authService: AuthService) { }

  sendVerificationCode(): void {
    // Lógica para enviar el código de verificación al número de teléfono celular
    const verificationCode = this.generateVerificationCode();

    // Aquí deberías utilizar un servicio externo para enviar el código de verificación al número de teléfono celular
    // Por ejemplo, puedes utilizar un servicio de SMS o un proveedor de correo electrónico para enviar el código
    // Asumiendo que tienes un servicio de SMS implementado, puedes llamarlo de la siguiente manera:
    this.authService.sendVerificationCode(this.phoneNumber, verificationCode)
      .subscribe(
        response => {
          // Manejar la respuesta del servicio de envío de código de verificación
          console.log('Verification code sent successfully');
          // Redirigir al usuario a la página de ingreso del código de verificación
        },
        error => {
          // Manejar errores en el envío del código de verificación
          console.error('Error sending verification code:', error);
        }
      );
  }

  generateVerificationCode(): string {
    // Lógica para generar un código de verificación de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    return code;
  }
}
