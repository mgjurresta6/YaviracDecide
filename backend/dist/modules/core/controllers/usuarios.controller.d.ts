import { UsuariosService } from '@core/services';
import { UsuarioEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class UsuariosController {
    private usuariosService;
    constructor(usuariosService: UsuariosService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: any): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: UsuarioEntity[]): Promise<ResponseHttpModel>;
}
