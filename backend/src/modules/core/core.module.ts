import { Global, Module } from '@nestjs/common';
import {
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
import { coreProviders } from '@core/providers';

@Global()
@Module({
  imports: [],
  controllers: [
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
