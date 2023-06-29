import { MenuTypeEnum } from '../enums/menu.enum';
import { RoleEntity } from '@auth/entities';
export declare class MenuEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    parent: MenuEntity;
    children: MenuEntity[];
    roles: RoleEntity[];
    code: string;
    icon: string;
    isVisible: boolean;
    label: string;
    routerLink: string;
    type: MenuTypeEnum;
    setCode(): Promise<void>;
}
