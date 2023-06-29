import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  cedula: number = 0;
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  rol: string = '';

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private usuarioService: UsuarioService){
      if(this.usuarioService.selectedUsuario){
        this.form = formBuilder.group({
          cedula: [this.usuarioService.selectedUsuario.cedula],
          nombre: [this.usuarioService.selectedUsuario.nombre,[Validators.required]],
          apellido: [this.usuarioService.selectedUsuario.apellido,[Validators.required]],
          correo: [this.usuarioService.selectedUsuario.correo,[Validators.required]],
          rol: [this.usuarioService.selectedUsuario.rol,[Validators.required]],
        });
      }else{
        this.form = formBuilder.group({
          cedula: [0],
          nombre: ['',[Validators.required]],
          apellido: ['',[Validators.required]],
          correo: ['',[Validators.required]],
          rol: ['',[Validators.required]]
        });
      }
  }
  onSubmit() {
    if (this.form.valid) {
      this.addUsuario();
      this.router.navigate(['lista-usuario']);
    } else {
      alert('Formulario No Valido');
    }
  }

  addUsuario() {
    this.usuarioService.addUsuario(this.form.value).subscribe(response => {
      console.log(response);
    })
    console.log(this.usuarioService.usuario);
  }

  updateUsuario() {
    this.usuarioService.updateUsuario(this.idField.value, this.form.value);
    console.log(this.usuarioService.usuario);
  }

  validateForm() {
    if (this.cedula === 0 && this.cedula <= 10) {

    }
  }

  get idField() {
    return this.form.controls['cedula'];
  }
}
