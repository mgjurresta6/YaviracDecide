import { CursoEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
import { CursosService } from '@core/services';
export declare class CursosController {
    private cursosService;
    constructor(cursosService: CursosService);
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: any): Promise<ResponseHttpModel>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: CursoEntity[]): Promise<ResponseHttpModel>;
}
