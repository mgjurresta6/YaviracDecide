import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('resultados', { schema: 'core' })
export class ResultadoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
