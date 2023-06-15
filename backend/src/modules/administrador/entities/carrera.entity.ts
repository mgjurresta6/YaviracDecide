import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('carreras', { schema: 'administrador' })
export class CarreraEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre de la carrera: marketing',
  })
  carrera: string;
}
