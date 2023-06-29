import { MenuEntity } from './menu.entity';
import { PermissionEntity } from './permission.entity';
import { UserEntity } from './user.entity';
export declare class RoleEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    menus: MenuEntity[];
    permissions: PermissionEntity[];
    users: UserEntity[];
    code: string;
    name: string;
    setCode(): Promise<void>;
}
