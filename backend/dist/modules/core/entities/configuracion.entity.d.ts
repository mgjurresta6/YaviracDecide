import { UsuarioEntity } from './usuario.entity';
export declare class ConfiguracionEntity {
    id: string;
    codigoReseteo: string;
    fechaReseteo: Date;
    duracionReseteo: Date;
    configuraciones: UsuarioEntity;
}
