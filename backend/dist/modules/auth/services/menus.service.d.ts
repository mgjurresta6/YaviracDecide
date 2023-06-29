import { Repository } from 'typeorm';
import { MenuEntity } from '@auth/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { CreateMenuDto, FilterMenuDto, UpdateMenuDto } from '@auth/dto';
export declare class MenusService {
    private repository;
    constructor(repository: Repository<MenuEntity>);
    create(payload: CreateMenuDto): Promise<ServiceResponseHttpModel>;
    catalogue(): Promise<ServiceResponseHttpModel>;
    getMenusForSidebar(): Promise<ServiceResponseHttpModel>;
    findAll(params?: FilterMenuDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<ServiceResponseHttpModel>;
    update(id: string, payload: UpdateMenuDto): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: MenuEntity[]): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
}
