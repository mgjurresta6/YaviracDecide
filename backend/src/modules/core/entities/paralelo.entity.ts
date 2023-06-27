import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { CursoEntity } from './curso.entity';

@Entity('paralelos', { schema: 'core' })
export class ParaleloEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Paralelo al que pertenece: A, B, C',
  })
  paralelo: string;

  @OneToMany(() => CursoEntity, (paralelo) => paralelo.id)
  @JoinColumn ({name: 'paralelo'})
  paralelos: CursoEntity[];
}
