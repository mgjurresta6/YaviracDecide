import { DataSource } from 'typeorm';
import { MenuEntity, PermissionEntity, RoleEntity, UserEntity } from '@auth/entities';
import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
export declare const authProviders: ({
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<MenuEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<PermissionEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<RoleEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<UserEntity>;
    inject: DataSourceEnum[];
})[];
