import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipos_usuarios', { schema: 'core' })
export class TipoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Tipo de ususario: Docente, Estudiante',
  })
  tipoUsuario: string;
}
