import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { CronogramaService } from 'src/app/Servicios/cronograma.service';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent {
  id: number = 0;
  actividad: string = '';
  fechaI: Date = new Date();
  fechaF: Date = new Date();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private cronogramaService: CronogramaService){
      if(this.cronogramaService.selectedCron){
        this.form = formBuilder.group({
          id: [this.cronogramaService.selectedCron.id],
          actividad: [this.cronogramaService.selectedCron.actividad,[Validators.required]],
          fechaI: [this.cronogramaService.selectedCron.fechaI,[Validators.required]],
          fechaF: [this.cronogramaService.selectedCron.fechaF,[Validators.required]],
        });
      }else{
        this.form = formBuilder.group({
          id: [0],
          actividad: ['',[Validators.required]],
          fechaI: [new Date(),[Validators.required]],
          fechaF: [new Date(),[Validators.required]]
        });
      }
  }
  onSubmit() {
    if (this.form.valid) {
      this.addCron();
      this.router.navigate(['lista-cronograma']);
    } else {
      alert('Formulario No Valido');
    }
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
