import { Repository } from 'typeorm';
import { UsuarioEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { CursosService, RolesService } from '@core/services';
export declare class UsuariosService {
    private usuarioRepository;
    private cursosService;
    private rolesService;
    constructor(usuarioRepository: Repository<UsuarioEntity>, cursosService: CursosService, rolesService: RolesService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: UsuarioEntity): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(cedula: number): Promise<any>;
    update(cedula: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(cedula: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: UsuarioEntity[]): Promise<ServiceResponseHttpModel>;
}
