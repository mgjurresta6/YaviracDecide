import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CursoEntity } from './curso.entity';
import { RolEntity } from './rol.entity';
import { TipoEntity } from './usuariotipo.entity';
import { ResultadoEntity } from './resultado.entity';
import { ConfiguracionEntity } from './configuracion.entity';

@Entity('estudiantes', { schema: 'core' })
export class EstudianteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'cedula',
    type: 'integer',
    comment: 'cedula del estudiante',
     nullable: true,
  })
  cedula: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre del estudiante',
     nullable: true,
  })
  nombreEstudiante: string;

  @Column({
    name: 'apellido',
    type: 'varchar',
    comment: 'Apellido del estudiante',
    nullable: true,
  })
  apellidoEstudiante: string;

  @Column({
    name: 'email',
    type: 'varchar',
    comment: 'Email del usuario',
    nullable: true,
  })
  emailEstudiante: string;

  @Column({
    name: 'clave',
    type: 'varchar',
    comment: 'Clave del estudiante',
    nullable: true,
  })
  claveEstudiante: string;

  @Column({
    name: 'jornada',
    type: 'varchar',
    comment: 'jornada del estudiante',
    nullable: true,
  })  
  jornada: string;

  @Column({
    name: 'carrera',
    type: 'varchar',
    comment: 'carrera del estudiante',
    nullable: true,
  })
  carrera: string;
  @Column({
    name: 'paralelo',
    type: 'varchar',
    comment: 'paralelo del estudiante',
    nullable: true,
  })
  paralelo: string;


 /*  @Column({
    name: 'estado_voto',
    type: 'boolean',
    comment: 'Si el usuario voto o aun no',
    nullable: true,
  })
 estadoVoto: boolean;

  @Column({
    name: 'periodo_ultimo_voto',
    type: 'varchar',
    comment: 'El ultimo periodo que voto',
    nullable: true,
  })
  ultimoVoto: string;

  @Column({
    name: 'estado',
    type: 'boolean',
    comment: 'EStado del ususario: Activo, Inactivo',
    nullable: true,
  })
  estadoUsuario: string;

  @ManyToOne(() => RolEntity)
  @JoinColumn ({name: 'rol_id'})
  rol: RolEntity;

  @ManyToOne(() => TipoEntity)
  @JoinColumn ({name: 'tipo_usuario'})
  tipo: TipoEntity;

  @ManyToOne(() => CursoEntity)
  @JoinColumn ({name: 'curso_id'})
  curso: CursoEntity;
  
  @OneToMany(() => ResultadoEntity, (resultado) => resultado.id)
  @JoinColumn ({name: 'usuario'})
  resultados: ResultadoEntity[];

  
  @OneToMany(() => ConfiguracionEntity, (configuracion) => configuracion.id)
  @JoinColumn ({name: 'configuracion'})
  configuraciones: ConfiguracionEntity[];*/
}
