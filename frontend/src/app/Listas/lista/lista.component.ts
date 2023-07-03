import { Component, OnInit } from '@angular/core';
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
import {Router} from "@angular/router";
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  
  candidato: any[] = [];
  selectedCandidato: any;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private candidatoListaService: CandidatoListaService, 
              private router: Router,
              public dialog: MatDialog){
    this.candidato = this.candidatoListaService.candidato;
  }

  ngOnInit() {
      this.lista();
  }
  lista(){
    this.candidato.map(re =>{
      re.estado = false;
    }
    )
    console.log(this.candidato)
  }
  save(){
    if(this.candidato = this.candidatoListaService.candidato.filter(candidato => candidato.estado === true )){
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta seguro de que quieres APROBAR esta lista? ',
        text: 'Una vez guardados los cambios ya no podrá editarlos',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'APROBAR LISTA',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Lista APROBADA con Exito!',
          )
          this.router.navigate(['lista-aprobacion'])
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado!',
            'No se Aprobo Ninguna Lista',
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
    }
    saveNull(){
      if(this.candidato = this.candidatoListaService.candidato.filter(candidato => candidato.estado === false)){
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: true
        })
        
        swalWithBootstrapButtons.fire({
          title: 'Esta seguro de que quieres DESAPROBAR esta lista? ',
          text: 'Una vez guardados los cambios ya no podrá editarlos',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'DESAPROBAR LISTA',
          cancelButtonText: 'Cancelar',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['aprobacion'])
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelado!',
              'No se Aprobo Ninguna Lista',
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
      }
  }
