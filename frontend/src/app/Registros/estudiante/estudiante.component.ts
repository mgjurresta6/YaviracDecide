import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import {Router} from "@angular/router";
import { EstudianteService } from 'src/app/Servicios/estudiante.service';
import { CarrerasService } from 'src/app/Servicios/carreras.service';
import { CarreraModel } from 'src/app/Models/carreras.model';
import { JornadaModel } from 'src/app/Models/jornadas.model';
import { ParaleloModel } from 'src/app/Models/paralelos.model';
import { EstudianteModel } from 'src/app/Models/estudiantes.model';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [{ label: 'Votante' }];

      this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };
  }

  cedula: number = 0 ;
  nombreEstudiante: string = '';
  apellidoEstudiante: string = '';
  emailEstudiante: string = '';
  claveEstudiante: string = '';
  carrera: string = '';
  jornada: string = '';
  paralelo: string = '';

  carreras: CarreraModel[] =  [];
  selectedCarrera: any = null;

  jornadas: JornadaModel[] =  [];
  selectedJornada: any = null;

  paralelos: ParaleloModel[] =  [];
  selectedParalelo: any = null;
  
  estudiantes: EstudianteModel[] =  [];

  form: FormGroup = this.buildForm;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private estudianteService: EstudianteService,
              private carrerasService: CarrerasService){
                this.getCarreras();
                this.getJornadas();
                this.getParalelos();
                this.getEstudiantes()
  }
  get buildForm(){
    if(this.estudianteService.selectedEstudiante){
      return this.form = this.formBuilder.group({
        cedula: [this.estudianteService.selectedEstudiante.cedula, [Validators.required]],
        nombreEstudiante: [this.estudianteService.selectedEstudiante.nombreEstudiante,[Validators.required]],
        apellidoEstudiante: [this.estudianteService.selectedEstudiante.apellidoEstudiante,[Validators.required]],
        emailEstudiante: [this.estudianteService.selectedEstudiante.emailEstudiante,[Validators.required]],
        carrera: [this.estudianteService.selectedEstudiante.carrera,[Validators.required]],
        jornada: [this.estudianteService.selectedEstudiante.jornada,[Validators.required]],
        paralelo: [this.estudianteService.selectedEstudiante.paralelo,[Validators.required]]
      });
    }else{
     return this.form = this.formBuilder.group({
        cedula: [0,[Validators.required]],
        nombreEstudiante: ['',[Validators.required]],
        apellidoEstudiante: ['',[Validators.required]],
        emailEstudiante: ['',[Validators.required]],
        carrera: ['',[Validators.required]],
        jornada: ['',[Validators.required]],
        paralelo: ['',[Validators.required]]
      });
    }
  }


  getCarreras(){
     /*this.carrerasService.getCarreras().subscribe(response=>{
      this.carreras = response.data;
    });                                                                                                                                                                                                                                                                                                                                                                                                                  
    console.log(this.rolesService.rol);*/
    this.carreras=[{id:1,carrera:'Desarrollo de Software'},
                {id:2,carrera:'Marketing'},
                {id:3,carrera:'Control de Incendios'},
                {id:4,carrera:'Arte Culinario'},
                {id:5,carrera:'Diseno de Modas'}];
  }
  getJornadas(){
    /*this.carrerasService.getCarreras().subscribe(response=>{
     this.carreras = response.data;
   });                                                                                                                                                                                                                                                                                                                                                                                                                  
   console.log(this.rolesService.rol);*/
   this.jornadas=[{id:1, jornada: 'Matutina'},
               {id:2,jornada:'Vespertina'},
               {id:3,jornada:'Nocturna'}]
              }
    getParalelos(){
          /*this.carrerasService.getCarreras().subscribe(response=>{
            this.carreras = response.data;
            });                                                                                                                                                                                                                                                                                                                                                                                                                  
    console.log(this.rolesService.rol);*/
    this.paralelos=[{id:1, paralelo: 'A'},
                  {id:2,paralelo:'B'},
                  {id:3,paralelo:'C'},
                  {id:4,paralelo:'E'}]
                  }

    getEstudiantes(){
      this.estudianteService.getEstudiantes().subscribe(response => 
        console.log(response),
        err => console.log(err)

        );
      console.log(this.estudianteService.estudiante);
    }
  onSubmit() {
    if (this.form.valid) {
      this.addEstudiante();
      this.router.navigate(['lista-estudiante']);
    } else {
      alert('Formulario No Valido');
    }
  }

  addEstudiante() {
    this.estudianteService.addEstudiante(this.form.value).subscribe(response => {
      console.log(response);
    });
    console.log(this.estudianteService.estudiante);
  }

  updateEstudiante() {
    this.estudianteService.updateEstudiante(this.idField.value, this.form.value);
    console.log(this.estudianteService.estudiante);
  }

  validateForm() {
    if (this.nombreEstudiante === '' && this.nombreEstudiante.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['cedula'];
  }
}