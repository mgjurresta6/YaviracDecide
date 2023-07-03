import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { VotosService } from 'src/app/Servicios/votos.service';
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';

@Component({
  selector: 'app-form-votos',
  templateUrl: './form-votos.component.html',
  styleUrls: ['./form-votos.component.css']
})
export class FormVotosComponent {
  votosForm: FormGroup;
  
  constructor(private candidatoListaService: CandidatoListaService,
    private formBuilder: FormBuilder, private router: Router, ) {
  if(this.candidatoListaService.selectedCandidato){
    this.votosForm = formBuilder.group({
      nombreVoto: [this.candidatoListaService.selectedCandidato.nombreVoto,[Validators.required]],
      voto: [this.candidatoListaService.selectedCandidato.voto,[Validators.required]]
    });
  }else{
    this.votosForm= formBuilder.group({
      nombreVoto: [this.candidatoListaService.nombreCandidatoSeleccionado,[Validators.required]],
      voto: [true]
    });
  }
}
onSubmit() {
  if (this.votosForm.valid) {
    this.addVoto();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Esta seguro de que quiere votar por esta lista? ',
      text: 'Una vez guardados los cambios ya no podrá editarlos',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Voto registrado con Exito!',
          'En unas horas consulta los resultados',
          'success'
        )
        this.router.navigate(['dashboard'])
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado!',
          'No se ha Registrado el voto :)',
          'error'
        )
      }
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'No se ha completado el voto',
      text: 'Complete el registro para continuar!',
    })
  }
  console.log(this.votosForm.valid);
}

addVoto() {
  this.candidatoListaService.addCandidato(this.votosForm.value);
  console.log(this.candidatoListaService.candidato);
}
}
