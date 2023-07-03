import { EstudiantesService } from '@core/services';
import { EstudianteEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class EstudiantesController {
    private estudiantesService;
    constructor(estudiantesService: EstudiantesService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: any): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: EstudianteEntity[]): Promise<ResponseHttpModel>;
}
