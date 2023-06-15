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
