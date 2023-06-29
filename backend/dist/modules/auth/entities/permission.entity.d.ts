import { RoleEntity } from './role.entity';
export declare class PermissionEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    roles: RoleEntity[];
    name: string;
}
