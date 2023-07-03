import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import {Router} from "@angular/router";
import { RolesService } from 'src/app/Servicios/roles.service';
import { RolModel } from 'src/app/Models/roles.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  
  selectedRol: any = null;

  cedula: number = 0;
  nombreUsuario: string = '';
  apellidoUsuario: string = '';
  emailUsuario: string = '';
  claveUsuario: string = '';
  rol: string = '';
  roles: RolModel[] = [];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private usuarioService: UsuarioService,
    private rolesService: RolesService){
      //this.getRoles();
      if(this.usuarioService.selectedUsuario){
        this.form = formBuilder.group({
          cedula: [this.usuarioService.selectedUsuario.cedula],
          nombreUsuario: [this.usuarioService.selectedUsuario.nombreUsuario,[Validators.required]],
          apellidoUsuario: [this.usuarioService.selectedUsuario.apellidoUsuario,[Validators.required]],
          emailUsuario: [this.usuarioService.selectedUsuario.emailUsuario,[Validators.required]],
          rol: [this.usuarioService.selectedUsuario.rol],
        });
      }else{
        this.form = formBuilder.group({
          cedula: [0],
          nombreUsuario: ['',[Validators.required]],
          apellidoUsuario: ['',[Validators.required]],
          emailUsuario: ['',[Validators.required]],
          rol: [null]
        });
      }
  }
      
  



  /*getRoles(){
    /*this.rolesService.getRoles().subscribe(response=>{
      this.roles = response.data;
    });                                                                                                                                                                                                                                                                                                                                                                                                                  
  console.log(this.rolesService.rol);
    this.roles=[{id:1,rol:'Administrador'},
                {id:2,rol:'Candidato'},
                {id:3,rol:'Votante'}];
  }*/
  onSubmit() {
    if (this.form.valid) {
      this.addUsuario();
      this.router.navigate(['lista-usuario']);
    } else {
      alert('Formulario No Valido');
    }
  }

  addUsuario() {
    this.usuarioService.addUsuario(this.form.value);
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
