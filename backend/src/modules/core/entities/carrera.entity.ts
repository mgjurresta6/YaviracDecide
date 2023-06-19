import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('carreras', { schema: 'core' })
export class CarreraEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre de la carrera: marketing',
  })
  carrera: string;
}
