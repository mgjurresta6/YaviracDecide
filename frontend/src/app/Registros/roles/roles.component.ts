import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import {Router} from "@angular/router";
import { RolesService } from 'src/app/Servicios/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  id: number = 0 ;
  rol: string = '';

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private rolesService: RolesService){
    if(this.rolesService.selectedRol){
      this.form = formBuilder.group({
        id: [this.rolesService.selectedRol.id, [Validators.required]],
        rol: [this.rolesService.selectedRol.rol,[Validators.required]],
      });
    }else{
      this.form = formBuilder.group({
        id: [0,[Validators.required]],
        rol: ['',[Validators.required]],
      });
    }
  }
  onSubmit() {
    if (this.form.valid) {
      this.addRol();
      this.router.navigate(['lista-estudiante']);
    } else {
      alert('Formulario No Valido');
    }
  }

  addRol() {
    this.rolesService.addRol(this.form.value).subscribe(response=>{
      console.log(response);
    });                                                                                                                                                                                                                                                                                                                                                                                                                  
    console.log(this.rolesService.rol);
  }

  validateForm() {
    if (this.rol === '' && this.rol.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['id'];
  }
}
