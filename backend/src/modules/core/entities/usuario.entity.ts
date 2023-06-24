import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CursoEntity } from './curso.entity';
import { RolEntity } from './rol.entity';
import { TipoEntity } from './usuariotipo.entity';
import { ResultadoEntity } from './resultado.entity';
import { ConfiguracionEntity } from './configuracion.entity';

@Entity('usuarios', { schema: 'core' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  cedula: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre del usuario',
  })
  nombreUsuario: string;

  @Column({
    name: 'apellido',
    type: 'varchar',
    comment: 'Apellido del usuario',
  })
  apellidoUsuario: string;

  @Column({
    name: 'email',
    type: 'varchar',
    comment: 'Email del usuario',
  })
  emailUsuario: string;

  @Column({
    name: 'clave',
    type: 'varchar',
    comment: 'Clave del usuario',
  })
  claveUsuario: string;

  @Column({
    name: 'estado_voto',
    type: 'boolean',
    comment: 'Si el usuario voto o aun no',
  })
  estadoVoto: boolean;

  @Column({
    name: 'periodo_ultimo_voto',
    type: 'varchar',
    comment: 'El ultimo periodo que voto',
  })
  ultimoVoto: string;

  @Column({
    name: 'estado',
    type: 'boolean',
    comment: 'EStado del ususario: Activo, Inactivo',
  })
  estadoUsuario: string;

  @ManyToOne(() => RolEntity)
  @JoinColumn ({name: 'rol_id'})
  rol: RolEntity;

  @ManyToOne(() => TipoEntity)
  @JoinColumn ({name: 'tipo_usuario'})
  tipo: TipoEntity;
  
  @OneToMany(() => ResultadoEntity, (resultado) => resultado.id)
  @JoinColumn ({name: 'usuario'})
  resultados: ResultadoEntity[];

  
  @OneToMany(() => ConfiguracionEntity, (configuracion) => configuracion.id)
  @JoinColumn ({name: 'configuracion'})
  configuraciones: ConfiguracionEntity[];
}
