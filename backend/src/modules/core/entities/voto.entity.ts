import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { ListaEntity } from './lista.entity';
import { ResultadoEntity } from './resultado.entity';

@Entity('votos', { schema: 'core' })
export class VotoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'voto',
    type: 'boolean',
    comment: 'Voto para la lista elegida',
  })
  votoUsuario: boolean;

  @Column({
    name: 'hora_voto',
    type: 'timestamptz',
    comment: 'Fecha y hora que se realizo el voto',
  })
  horaVoto: Date;

  @OneToMany(() => ResultadoEntity, (voto) => voto.id)
  @JoinColumn ({name: 'voto'})
  votos: ResultadoEntity[];

  @ManyToOne(() => ListaEntity)
  @JoinColumn ({name: 'lista'})
  lista: ListaEntity;
}
