import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { CursoEntity } from './curso.entity';

@Entity('carreras', { schema: 'core' })
export class CarreraEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre de la carrera: marketing',
  })
  carrera: string;

  @OneToMany(() => CursoEntity, (carrera) => carrera.id)
  @JoinColumn ({name: 'carrera'})
  carreras: CursoEntity[];
}
