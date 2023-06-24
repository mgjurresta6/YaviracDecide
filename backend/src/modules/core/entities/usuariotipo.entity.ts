import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Entity('tipos_usuarios', { schema: 'core' })
export class TipoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'nombre',
    type: 'varchar',
    comment: 'Tipo de ususario: Docente, Estudiante',
  })
  tipoUsuario: string;

  @OneToMany(() => UsuarioEntity, (tipoUsuario) => tipoUsuario.cedula)
  @JoinColumn ({name: 'tipo_usuario'})
  tipos: UsuarioEntity[];
}
