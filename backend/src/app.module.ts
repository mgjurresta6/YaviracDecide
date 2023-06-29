<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradorModule } from './modules/administrador/administrador.module';
import { CandidatoModule } from './modules/candidato/candidato.module';
import { VotanteModule } from './modules/votante/votante.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'yaviracDecide',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    AdministradorModule,
    CandidatoModule,
    VotanteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
=======
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { enviroments } from './enviroments';
import { config } from '@config';
import { CoreModule } from '@core/modules';
import { CommonModule } from '@common/modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USER: Joi.string().required(),
      }),
    }),
    HttpModule,
    CommonModule,
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
>>>>>>> backend
