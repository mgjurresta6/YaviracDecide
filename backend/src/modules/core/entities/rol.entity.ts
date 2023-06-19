import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles', { schema: 'core' })
export class RolEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre del rol de usuario: candidato, administrador, votante',
  })
  rol: string;
}
