import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dignidades', { schema: 'candidato' })
export class DignidadEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre de la dignidad: Presidente',
  })
  nombreDignidad: string;
}
