import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_listas', { schema: 'candidato' })
export class TipoListaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Tipo de lista: Docente, estudiante',
  })
  tipoLista: string;
}
