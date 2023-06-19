import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('configuraciones', { schema: 'core' })
export class ConfiguracionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'codigo_reseteo',
    type: 'varchar',
    comment: 'Codigo para recuperar la clave',
  })
  codigoReseteo: string;

  @Column({
    name: 'fecha',
    type: 'timestamptz',
    comment: 'Fecha que se envio el codigo',
  })
  fechaReseteo: Date;

  @Column({
    name: 'duracion',
    type: 'timestamptz',
    comment: 'Tiempo de duracion para que utilice el codigo',
  })
  duracionReseteo: Date;
}
