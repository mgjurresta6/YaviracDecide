import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CursoEntity } from './curso.entity';
import { RolEntity } from './rol.entity';
import { TipoEntity } from './usuariotipo.entity';
import { ResultadoEntity } from './resultado.entity';
import { ConfiguracionEntity } from './configuracion.entity';

@Entity('usuarios', { schema: 'core' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'cedula',
    type: 'integer',
    comment: 'cedula del usuario',
     nullable: true,
  })
  cedula: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre del usuario',
     nullable: true,
  })
  nombreUsuario: string;

  @Column({
    name: 'apellido',
    type: 'varchar',
    comment: 'Apellido del usuario',
    nullable: true,
  })
  apellidoUsuario: string;

  @Column({
    name: 'email',
    type: 'varchar',
    comment: 'Email del usuario',
    nullable: true,
  })
  emailUsuario: string;

  @Column({
    name: 'clave',
    type: 'varchar',
    comment: 'Clave del usuario',
    nullable: true,
  })
  claveUsuario: string;

  @Column({
    name: 'rol',
    type: 'varchar',
    comment: 'rol del usuario',
    nullable: true,
  })
  rol: string;

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
