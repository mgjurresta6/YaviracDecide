import { Repository } from 'typeorm';
import { UsuarioEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { CursosService, RolesService, TipoUsuariosService } from '@core/services';
export declare class UsuariosService {
    private usuarioRepository;
    private cursosService;
    private rolesService;
    private tiposService;
    constructor(usuarioRepository: Repository<UsuarioEntity>, cursosService: CursosService, rolesService: RolesService, tiposService: TipoUsuariosService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: UsuarioEntity): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: UsuarioEntity[]): Promise<ServiceResponseHttpModel>;
}
