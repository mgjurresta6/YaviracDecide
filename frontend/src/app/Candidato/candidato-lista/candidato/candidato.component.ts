import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent {
  nombreLista: string = '';
  nombre: string = '';
  dignidad: string = '';
  requisitos: string= '';
  logo: string='';
  color: string='';
  propuesta: string='';

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private candidatoListaService: CandidatoListaService){
    if(this.candidatoListaService.selectedPerson){
      this.form = formBuilder.group({
        nombreLista: [this.candidatoListaService.selectedPerson.nombreLista,[Validators.required]],
        nombre: [this.candidatoListaService.selectedPerson.nombre,[Validators.required]],
        dignidad: [this.candidatoListaService.selectedPerson.dignidad,[Validators.required]],
        requisitos: [this.candidatoListaService.selectedPerson.requisitos,[Validators.required]],
  
     
      });
    }else{
      this.form = formBuilder.group({
        nombre: ['',[Validators.required]],
        nombreLista: ['',[Validators.required]],
        dignidad: ['',[Validators.required]],
        requisitos: ['',[Validators.required]],

      });
    }
  }
  onSubmit() {
    if (this.form.valid) {
      this.addUsuario();
      this.router.navigate(['candidato-lista']);
    } else {
      alert('Formulario no valido, revisalo antes de volver a intentarlo');
    }
  }

  addUsuario() {
    this.candidatoListaService.addUsuario(this.form.value);
    console.log(this.candidatoListaService.usuario);
  }

  updateUsuario() {
    this.candidatoListaService.updateUsuario(this.idField.value, this.form.value);
    console.log(this.candidatoListaService.usuario);
  }

  validateForm() {
    if (this.nombre === '' && this.nombre.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['nombre'];
  }
}