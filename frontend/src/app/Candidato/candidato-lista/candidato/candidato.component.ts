import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent {
  nombreLista: string = '';
  nombre: string = '';
  presidente: string='';
  vicepresidente: string='';
  tesorero: string='';
  secretario: string= '';
  vocal1: string='';
  vocal2: string='';
  cocal3: string='';
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
        presidente: [this.candidatoListaService.selectedPerson.presidente,[Validators.required]],
        vicepresidente:[this.candidatoListaService.selectedPerson.vicepresidente,[Validators.required]],
        tesorero: [this.candidatoListaService.selectedPerson.tesorero,[Validators.required]],
        secretario: [this.candidatoListaService.selectedPerson.secretario,[Validators.required]],
        vocal1: [this.candidatoListaService.selectedPerson.vocal1,[Validators.required]],
        vocal2: [this.candidatoListaService.selectedPerson.vocal2,[Validators.required]],
        vocal3: [this.candidatoListaService.selectedPerson.vocal3,[Validators.required]],
      });
    }else{
      this.form = formBuilder.group({
        nombre: ['',[Validators.required ]],
        nombreLista: ['',[Validators.required]],
        presidente: ['',[Validators.required]],
        vicepresidente: ['',[Validators.required]],
        tesorero: ['',[Validators.required]],
        secretario:['',[Validators.required]],
        vocal1: ['',[Validators.required]],
        vocal2: ['',[Validators.required]],
        vocal3: ['',[Validators.required]],
        
       
        
      });
    }
  }
  onSubmit() {
    if (this.form.valid) {
      this.addCandidato();
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta seguro de que quiere registrar esta lista? ',
        text: 'Una vez guardados los cambios ya no podrá editarlos',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Registrar lista',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Lista Registrada con Exito!',
            'En una semana ingresa de nuevo a la platoforma para revisar si tu lista fue aceotada o no fue aceptada.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado!',
            'No se ha Registrado la Lista :)',
            'error'
          )
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No se ha completado el Registro',
        text: 'Complete el registro para continuar!',
      })
    }
    console.log(this.form.valid);
  }

  addCandidato() {
    this.candidatoListaService.addCandidato(this.form.value);
    console.log(this.candidatoListaService.candidato);
  }

  updateCandidato() {
    this.candidatoListaService.updateCandidato(this.idField.value, this.form.value);
    console.log(this.candidatoListaService.candidato);
  }

  validateForm() {
    if (this.nombre === '' && this.nombre.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['nombre'];
  }
}