import { Global, Module } from '@nestjs/common';
import {
  CataloguesController,
  ActividadesController,
  CarrerasController,
  ConfiguracionesController,
  CronogramasController,
  CursosController,
  DignidadesController,
  JornadasController,
  ListasController,
  ParalelosController,
  PeriodoLectivosController,
  ResultadosController,
  RolesController,
  tipoUsuariosController,
  UsuariosController,
  TipoListasController,
  VotosController
  
} from '@core/controllers';
import {
  CataloguesService,
  ActividadesService,
  CarrerasService,
  ConfiguracionesService,
  CronogramasService,
  CursosService,
  DignidadesService,
  JornadasService,
  ListasService,
  ParalelosService,
  PeriodoLectivosService,
  ResultadosService,
  RolesService,
  TipoListasService,
  UsuariosService,
  TipoUsuariosService,
  VotosService
} from '@core/services';
import { DatabaseModule } from '@database';
import { coreProviders } from '@core/providers';

@Global()
@Module({
  imports: [DatabaseModule],
  controllers: [
    CataloguesController,
    ActividadesController,
    CarrerasController,
    ConfiguracionesController,
    CronogramasController,
    CursosController,
    DignidadesController,
    JornadasController,
    ListasController,
    ParalelosController,
    PeriodoLectivosController,
    ResultadosController,
    RolesController,
    tipoUsuariosController,
    UsuariosController,
    TipoListasController,
    VotosController
  ],
  providers: [
    ...coreProviders,
    CataloguesService,
    ActividadesService,
    CarrerasService,
    ConfiguracionesService,
    CronogramasService,
    CursosService,
    DignidadesService,
    JornadasService,
    ListasService,
    ParalelosService,
    PeriodoLectivosService,
    ResultadosService,
    RolesService,
    TipoListasService,
    UsuariosService,
    TipoUsuariosService,
    VotosService

  ],
  exports: [
    ...coreProviders,
    CataloguesService,
    CarrerasService,
    ConfiguracionesService,
    CronogramasService,
    CursosService,
    DignidadesService,
    JornadasService,
    ListasService,
    ParalelosService,
    PeriodoLectivosService,
    ResultadosService,
    RolesService,
    TipoListasService,
    UsuariosService,
    TipoUsuariosService,
    VotosService
  ],
})
export class CoreModule {}
