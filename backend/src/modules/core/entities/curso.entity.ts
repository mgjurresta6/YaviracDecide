import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { CarreraEntity } from './carrera.entity';
import { UsuarioEntity } from './usuario.entity';
import { JornadaEntity } from './jornada.entity';
import { ParaleloEntity } from './paralelo.entity';

@Entity('cursos', { schema: 'core' })
export class CursoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Acronimo: DS',
  })
  acronimoCarrera: string;

  @ManyToOne(() => CarreraEntity)
  @JoinColumn ({name: 'curso_id'})
  carrera: CarreraEntity;

  @ManyToOne(() => JornadaEntity)
  @JoinColumn ({name: 'jornada_id'})
  jornada: JornadaEntity;

  @ManyToOne(() => ParaleloEntity)
  @JoinColumn ({name: 'paralelo_id'})
  paralelo: CarreraEntity;

  @OneToMany(() => UsuarioEntity, (curso) => curso.cedula)
  @JoinColumn ({name: 'curso'})
  cursos: UsuarioEntity[];
}
