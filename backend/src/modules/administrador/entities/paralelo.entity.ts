import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paralelos', { schema: 'administrador' })
export class ParaleloEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Paralelo al que pertenece: A, B, C',
  })
  paralelo: string;
}
