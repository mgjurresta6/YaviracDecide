import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { EstudianteService } from 'src/app/Servicios/estudiante.service';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {

  cedula: number = 0 ;
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  carrera: string = '';
  jornada: string = '';
  paralelo: string = '';

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private estudianteService: EstudianteService){
    if(this.estudianteService.selectedPerson){
      this.form = formBuilder.group({
        cedula: [this.estudianteService.selectedPerson.cedula, [Validators.required]],
        nombre: [this.estudianteService.selectedPerson.nombre,[Validators.required]],
        apellido: [this.estudianteService.selectedPerson.apellido,[Validators.required]],
        correo: [this.estudianteService.selectedPerson.correo,[Validators.required]],
        carrera: [this.estudianteService.selectedPerson.carrera,[Validators.required]],
        jornada: [this.estudianteService.selectedPerson.jornada,[Validators.required]],
        paralelo: [this.estudianteService.selectedPerson.paralelo,[Validators.required]]
      });
    }else{
      this.form = formBuilder.group({
        cedula: [0,[Validators.required]],
        nombre: ['',[Validators.required]],
        apellido: ['',[Validators.required]],
        correo: ['',[Validators.required]],
        carrera: ['',[Validators.required]],
        jornada: ['',[Validators.required]],
        paralelo: ['',[Validators.required]]
      });
    }
  }
  onSubmit() {
    if (this.form.valid) {
      this.addUsuario();
      this.router.navigate(['lista-estudiante']);
    } else {
      alert('Formulario No Valido');
    }
  }

  addUsuario() {
    this.estudianteService.addUsuario(this.form.value);
    console.log(this.estudianteService.usuario);
  }

  updateUsuario() {
    this.estudianteService.updateUsuario(this.idField.value, this.form.value);
    console.log(this.estudianteService.usuario);
  }

  validateForm() {
    if (this.nombre === '' && this.nombre.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['cedula'];
  }
}