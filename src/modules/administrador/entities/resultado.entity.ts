import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('resultados', { schema: 'administrador' })
export class ResultadoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
