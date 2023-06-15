import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cronogramas', { schema: 'administrador' })
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
}
