import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { VotoEntity } from './voto.entity';

@Entity('resultados', { schema: 'core' })
export class ResultadoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @ManyToOne(() => UsuarioEntity)
  @JoinColumn ({name: 'usuario'})
  resultado: UsuarioEntity;

  @OneToMany(() => VotoEntity, (voto) => voto.id)
  @JoinColumn ({name: 'voto'})
  votos: VotoEntity[];
}
