import { Repository } from 'typeorm';
import { RoleEntity } from '@auth/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { CreateRoleDto, FilterRoleDto, UpdateRoleDto } from '@auth/dto';
export declare class RolesService {
    private repository;
    constructor(repository: Repository<RoleEntity>);
    create(payload: CreateRoleDto): Promise<ServiceResponseHttpModel>;
    catalogue(): Promise<ServiceResponseHttpModel>;
    findAll(params?: FilterRoleDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<ServiceResponseHttpModel>;
    update(id: string, payload: UpdateRoleDto): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: RoleEntity[]): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
}
