import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { DignidadEntity } from './dignidad.entity';
import { TipoListaEntity } from './tipolista.entity';
import { VotoEntity } from './voto.entity';

@Entity('listas', { schema: 'core' })
export class ListaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Nombre de la lista',
  })
  nombreLista: string;

  @Column({
    name: 'logo',
    type: 'varchar',
    comment: 'Logo de la lista',
  })
  logo: string;

  @Column({
    name: 'slogan',
    type: 'varchar',
    comment: 'Slogan de la lista',
  })
  slogan: string;

  @Column({
    name: 'color',
    type: 'varchar',
    comment: 'Color de la lista',
  })
  color: string;

  @Column({
    name: 'numero',
    type: 'integer',
    comment: 'Numero de la lista',
  })
  numeroLista: string;

  @Column({
    name: 'propuesta',
    type: 'varchar',
    comment: 'propuesta de la lista',
  })
  propuesta: string;


  @ManyToOne(() => TipoListaEntity)
  @JoinColumn ({name: 'tipo_lista'})
  tipoLista: TipoListaEntity;

  @OneToMany(() => VotoEntity, (lista) => lista.id)
  @JoinColumn ({name: 'lista'})
  listas: VotoEntity[];

  @ManyToOne(() => DignidadEntity)
  @JoinColumn ({name: 'dignidad'})
  dignidad: DignidadEntity;

}
