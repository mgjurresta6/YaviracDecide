import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jornadas', { schema: 'core' })
export class JornadaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre de la jornada: Matutina',
  })
  jornada: string;
}
