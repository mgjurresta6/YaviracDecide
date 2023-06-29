import { RolesService } from '@core/services';
import { RolEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: any): Promise<ResponseHttpModel>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: RolEntity[]): Promise<ResponseHttpModel>;
}
