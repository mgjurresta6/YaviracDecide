import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CronogramaEntity } from './cronograma.entity';

@Entity('actividades', { schema: 'core' })
export class ActividadEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre de la actividad',
  })
  actividad: string;
}
