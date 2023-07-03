import { RolesService, UsersService } from '@auth/services';
export declare class UsersSeeder {
    private rolesService;
    private usersService;
    constructor(rolesService: RolesService, usersService: UsersService);
    run(): Promise<void>;
    createUsers(): Promise<void>;
}
