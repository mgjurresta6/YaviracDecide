import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-aprobacion',
  templateUrl: './aprobacion.component.html',
  styleUrls: ['./aprobacion.component.css']
})
export class AprobacionComponent implements OnInit{
  form: FormGroup;
  categories: any[] = [
      { name: 'Si', key: 'S' },
      { name: 'No', key: 'N' },
  ];
  ngOnInit() {
    this.form = new FormGroup({
        selectedCategory: new FormControl()
    });
}
constructor (private router: Router){}

onSubmit() {
  if (this.form.valid) {
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
  console.log(this.form.valid);
}
}
