import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import { DataSourceEnum } from '@shared/enums';
import { config } from '@config';
export declare const databaseProviders: {
    provide: DataSourceEnum;
    inject: string[];
    useFactory: (configService: ConfigType<typeof config>) => Promise<DataSource>;
}[];
