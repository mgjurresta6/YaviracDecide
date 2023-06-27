import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import {  CronogramaEntity } from "./cronograma.entity";

@Entity('periodo_lectivos', { schema: 'core' })
export class PeriodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre del periodo lectivo: Noviembre-Marzo 2022-2',
  })
  periodoLectivo: string;

  @Column({
    name: 'fecha_inicio',
    type: 'timestamptz',
    comment: 'Fecha que inicio el periodo lectivo',
  })
  fechaInicioPeriodo: Date;

  @Column({
    name: 'fecha_finalizacion',
    type: 'timestamptz',
    comment: 'Fecha que finalizo el periodo lectivo',
  })
  fechaFinPeriodo: Date;

  @OneToMany(() => CronogramaEntity , (periodo) => periodo.id )
  @JoinColumn ({name: 'cronogramas'})
  periodos: CronogramaEntity;
}
