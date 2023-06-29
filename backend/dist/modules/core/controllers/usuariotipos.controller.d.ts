import { TipoUsuariosService } from '@core/services';
import { TipoEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class tipoUsuariosController {
    private tipousuariosService;
    constructor(tipousuariosService: TipoUsuariosService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: any): Promise<ResponseHttpModel>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: TipoEntity[]): Promise<ResponseHttpModel>;
}
