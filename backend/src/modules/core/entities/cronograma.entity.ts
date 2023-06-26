import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn} from 'typeorm';
import { ActividadEntity } from './actividad.entity';
import { PeriodoEntity } from './periodolectivo.entity';
@Entity('cronogramas', { schema: 'core' })
export class CronogramaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'fecha_creacion',
    type: 'timestamptz',
    comment: 'Fecha que fue creado el cronograma',
  })
  fechaCreacion: Date;

  @Column({
    name: 'responsable',
    type: 'varchar',
    comment: 'Nombre del usuario que creo el cronograma',
  })
  responsable: string;

  @ManyToMany(()=> ActividadEntity)
  @JoinTable({name: 'detalle_cronogramas'})
  actividad: ActividadEntity;

  @ManyToOne(()=> PeriodoEntity)
  @JoinColumn({name: 'cronogroma'})
  periodo: PeriodoEntity;
  
}
