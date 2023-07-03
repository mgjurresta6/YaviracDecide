import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Entity('roles', { schema: 'core' })
export class RolEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre del rol de usuario: candidato, administrador, votante',
    nullable: true,
  })
  rol: string;
  
  @OneToMany(() => UsuarioEntity, (rol) => rol.cedula)
  @JoinColumn ({name: 'rol'})
  roles: UsuarioEntity[];
}
