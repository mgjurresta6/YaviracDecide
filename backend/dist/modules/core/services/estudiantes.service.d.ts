import { Repository } from 'typeorm';
import { EstudianteEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { CursosService, RolesService, TipoUsuariosService } from '@core/services';
export declare class EstudiantesService {
    private estudianteRepository;
    private cursosService;
    private rolesService;
    private tiposService;
    constructor(estudianteRepository: Repository<EstudianteEntity>, cursosService: CursosService, rolesService: RolesService, tiposService: TipoUsuariosService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: EstudianteEntity): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: EstudianteEntity[]): Promise<ServiceResponseHttpModel>;
}
