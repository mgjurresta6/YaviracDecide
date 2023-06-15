import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cursos', { schema: 'administrador' })
export class CursoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Acronimo: DS',
  })
  acronimoCarrera: string;
}
