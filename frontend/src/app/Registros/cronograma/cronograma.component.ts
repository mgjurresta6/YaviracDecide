import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { MenuItem } from 'primeng/api';
import { CronogramaService } from 'src/app/Servicios/cronograma.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [{ label: 'Cronograma' }];

      this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };
  }
  id: number = 0;
  actividad: string = '';
  fechaI: Date = new Date();
  fechaF: Date = new Date();
  estado: boolean = false;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private cronogramaService: CronogramaService){
      if(this.cronogramaService.selectedCron){
        this.form = formBuilder.group({
          id: [this.cronogramaService.selectedCron.id],
          actividad: [this.cronogramaService.selectedCron.actividad,[Validators.required]],
          fechaI: [this.cronogramaService.selectedCron.fechaI,[Validators.required]],
          fechaF: [this.cronogramaService.selectedCron.fechaF,[Validators.required]],
          estado: [this.cronogramaService.selectedCron.estado],
        });
      }else{
        this.form = formBuilder.group({
          id: [0],
          actividad: ['',[Validators.required]],
          fechaI: [new Date(),[Validators.required]],
          fechaF: [new Date(),[Validators.required]],
          estado: [true]
        });
      }
  }
  onSubmit() {
    if (this.form.valid) {
      this.addCron();
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta seguro de que quiere registrar la nueva actividad? ',
        text: 'Una vez guardados los cambios ya no podrá editarlos',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Registrar Actividad',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Actividad Registrada con Exito!',
          )
          this.router.navigate(['lista-cronograma'])
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado!',
            'No se ha Registrado la Actividad :)',
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

  addCron() {
    this.cronogramaService.addCron(this.form.value).subscribe(response => {
      console.log(response);
    });
    console.log(this.cronogramaService.cronograma);
  }

  updateCron() {
    this.cronogramaService.updateCron(this.idField.value, this.form.value);
    console.log(this.cronogramaService.cronograma);
  }

  validateForm() {
    if (this.actividad === '' && this.actividad.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['id'];
  }

}
