import { Repository } from 'typeorm';
import { CursoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { JornadasService, CarrerasService, ParalelosService } from '@core/services';
export declare class CursosService {
    private cursoRepository;
    private jornadasService;
    private paralelosService;
    private carrerasService;
    constructor(cursoRepository: Repository<CursoEntity>, jornadasService: JornadasService, paralelosService: ParalelosService, carrerasService: CarrerasService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: CursoEntity): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: number): Promise<any>;
    update(id: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: CursoEntity[]): Promise<ServiceResponseHttpModel>;
}
