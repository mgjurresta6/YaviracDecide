import { CataloguesSeeder } from './catalogues-seeder';
import { UsersSeeder } from './users-seeder';
import { RolesSeeder } from './roles-seeder';
import { MenusSeeder } from './menus-seeder';
export declare class DatabaseSeeder {
    private cataloguesSeeder;
    private usersSeeder;
    private rolesSeeder;
    private menusSeeder;
    constructor(cataloguesSeeder: CataloguesSeeder, usersSeeder: UsersSeeder, rolesSeeder: RolesSeeder, menusSeeder: MenusSeeder);
    run(): Promise<void>;
}
