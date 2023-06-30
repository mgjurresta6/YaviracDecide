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
  presidente: string='';
  vicepresidente: string='';
  tesorero: string='';
  secretario: string= '';
  vocal1: string='';
  vocal2: string='';
  cocal3: string='';
  logo: string='';
  color: string='';
  propuesta: string='';
  requisitos: string='';

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private candidatoListaService: CandidatoListaService){
    if(this.candidatoListaService.selectedCandidato){
      this.form = formBuilder.group({
        nombreLista: [this.candidatoListaService.selectedCandidato.nombreLista,[Validators.required]],
        presidente: [this.candidatoListaService.selectedCandidato.presidente,[Validators.required]],
        vicepresidente:[this.candidatoListaService.selectedCandidato.vicepresidente,[Validators.required]],
        tesorero: [this.candidatoListaService.selectedCandidato.tesorero,[Validators.required]],
        secretario: [this.candidatoListaService.selectedCandidato.secretario,[Validators.required]],
        vocal1: [this.candidatoListaService.selectedCandidato.vocal1,[Validators.required]],
        vocal2: [this.candidatoListaService.selectedCandidato.vocal2,[Validators.required]],
        vocal3: [this.candidatoListaService.selectedCandidato.vocal3,[Validators.required]],
        logo: [this.candidatoListaService.selectedCandidato.logo,[Validators.required]],
       color: [this.candidatoListaService.selectedCandidato.color,[Validators.required]],
        propuesta: [this.candidatoListaService.selectedCandidato.propuesta,[Validators.required]],
        requisitos: [this.candidatoListaService.selectedCandidato.requisitos,[Validators.required]],
      });
    }else{
      this.form = formBuilder.group({
        nombreLista: ['',[Validators.required]],
        presidente: ['',[Validators.required]],
        vicepresidente: ['',[Validators.required]],
        tesorero: ['',[Validators.required]],
        secretario:['',[Validators.required]],
        vocal1: ['',[Validators.required]],
        vocal2: ['',[Validators.required]],
        vocal3: ['',[Validators.required]],
       logo: ['',[Validators.required]],
       color: ['',[Validators.required]],
      propuesta: ['',[Validators.required]],
        requisitos: ['',[Validators.required]],
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
        title: '¿Esta seguro de que quiere registrar esta lista? ',
        text: 'Una vez guardados los cambios ya no podrá editarlos',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Lista Registrada con Exito!',
            'En una semana ingresa de nuevo a la platoforma para revisar si tu lista fue aceptada o no fue aceptada.',
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
    if (this.nombreLista === '' && this.nombreLista.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['nombreLista'];
  }
}