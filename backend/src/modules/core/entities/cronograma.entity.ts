import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn} from 'typeorm';
import { ActividadEntity } from './actividad.entity';
import { PeriodoEntity } from './periodolectivo.entity';
@Entity('cronogramas', { schema: 'core' })
export class CronogramaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'actividad',
    type: 'varchar',
    comment: 'Actividad del cronograma',
  })
  actividad: string;

  @Column({
    name: 'fecha_creacion',
    type: 'timestamptz',
    comment: 'Fecha que fue creado el cronograma',
  })
  fechaCreacion: Date;

  @Column({
    name: 'fecha_finalizacion',
    type: 'timestamptz',
    comment: 'Fecha que fue finalizado el cronograma',
  })
  fechaFinalizacion: Date;

  @Column({
    name: 'estado',
    type: 'boolean',
    comment: 'Estado del cronograma',
    nullable: true,
  })
  estado: boolean;

 /*@ManyToMany(()=> ActividadEntity)
  @JoinTable({name: 'detalle_cronogramas'})
  actividad: ActividadEntity;

  @ManyToOne(()=> PeriodoEntity)
  @JoinColumn({name: 'cronogroma'})
  periodo: PeriodoEntity;*/
  
}
