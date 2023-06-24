import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { CursoEntity } from './curso.entity';

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

  @OneToMany(() => CursoEntity, (curso) => curso.jornada)
  @JoinColumn ({name: 'jornada'})
  jornadas: CursoEntity[];
}
