import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('actividades', { schema: 'administrador' })
export class ActividadEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre de la actividad',
  })
  actividad: string;
}
