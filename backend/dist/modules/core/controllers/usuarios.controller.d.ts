import { UsuariosService } from '@core/services';
import { UsuarioEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class UsuariosController {
    private usuariosService;
    constructor(usuariosService: UsuariosService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(cedula: number): Promise<ResponseHttpModel>;
    update(cedula: number, payload: any): Promise<ResponseHttpModel>;
    remove(cedula: number): Promise<ResponseHttpModel>;
    removeAll(payload: UsuarioEntity[]): Promise<ResponseHttpModel>;
}
