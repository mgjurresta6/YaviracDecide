import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
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
  voto: boolean;

  @Column({
    name: 'hora_voto',
    type: 'timestamptz',
    comment: 'Fecha y hora que se realizo el voto',
  })
  horaVoto: Date;

  
  @ManyToOne(() => ResultadoEntity)
  @JoinColumn ({name: 'votos'})
  votos: ResultadoEntity;
}
