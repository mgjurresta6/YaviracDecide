import { Repository } from 'typeorm';
import { UsuarioEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class UsuariosService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(cedula: number): Promise<any>;
    update(cedula: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(cedula: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: UsuarioEntity[]): Promise<ServiceResponseHttpModel>;
}
