import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { ListaEntity } from './lista.entity'


@Entity('dignidades', { schema: 'core' })
export class DignidadEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre de la dignidad: Presidente',
  })
  nombreDignidad: string;

  @ManyToMany(()=> ListaEntity)
  @JoinTable({name: 'lista_dignidades'})
  listas: ListaEntity;

}
