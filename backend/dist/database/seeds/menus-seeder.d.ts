import { MenusService } from '@auth/services';
export declare class MenusSeeder {
    private menusService;
    constructor(menusService: MenusService);
    run(): Promise<void>;
    createMenus(): Promise<void>;
}
