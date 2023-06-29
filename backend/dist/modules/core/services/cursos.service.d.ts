import { Repository } from 'typeorm';
import { CursoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { CarrerasService, JornadasService, ParalelosService } from '@core/services';
export declare class CursosService {
    private cursoRepository;
    private carrerasService;
    private jornadasService;
    private paralelosService;
    constructor(cursoRepository: Repository<CursoEntity>, carrerasService: CarrerasService, jornadasService: JornadasService, paralelosService: ParalelosService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: CursoEntity): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: number): Promise<any>;
    update(id: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: CursoEntity[]): Promise<ServiceResponseHttpModel>;
}
