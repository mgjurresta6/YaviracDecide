import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios', { schema: 'administrador' })
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
}
