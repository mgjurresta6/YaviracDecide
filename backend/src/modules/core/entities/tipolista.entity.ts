import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ListaEntity } from './lista.entity';

@Entity('tipo_listas', { schema: 'core' })
export class TipoListaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Tipo de lista: Docente, estudiante',
  })
  tipoLista: string;

  
  @OneToMany(() => ListaEntity, (tipoLista) => tipoLista.id)
  @JoinColumn ({name: 'tipo_lista'})
  tipoListas: ListaEntity[];
}
