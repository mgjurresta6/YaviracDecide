import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
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

  @OneToMany(() => ListaEntity, (dignidad) => dignidad.id)
  @JoinColumn ({name: 'dignidad'})
  dignidades: ListaEntity[];

}
