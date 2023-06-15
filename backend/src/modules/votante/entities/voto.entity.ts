import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('votos', { schema: 'votante' })
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
}
