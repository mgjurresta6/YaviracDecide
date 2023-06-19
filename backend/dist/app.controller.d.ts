import { AppService } from './app.service';
import { DatabaseSeeder } from '@database';
import { ResponseHttpModel } from '@shared/models';
export declare class AppController {
    private readonly appService;
    private databaseSeeder;
    constructor(appService: AppService, databaseSeeder: DatabaseSeeder);
    getHello(): string;
    init(): Promise<ResponseHttpModel>;
}
